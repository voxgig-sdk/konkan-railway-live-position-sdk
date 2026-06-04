package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/konkan-railway-live-position-sdk/go"
	"github.com/voxgig-sdk/konkan-railway-live-position-sdk/go/core"

	vs "github.com/voxgig-sdk/konkan-railway-live-position-sdk/go/utility/struct"
)

func TestTrainEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Train(nil)
		if ent == nil {
			t.Fatal("expected non-nil TrainEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := trainBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "train." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set KONKANRAILWAYLIVEPOSITION_TEST_TRAIN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		trainRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.train", setup.data)))
		var trainRef01Data map[string]any
		if len(trainRef01DataRaw) > 0 {
			trainRef01Data = core.ToMapAny(trainRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = trainRef01Data

		// LIST
		trainRef01Ent := client.Train(nil)
		trainRef01Match := map[string]any{}

		trainRef01ListResult, err := trainRef01Ent.List(trainRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, trainRef01ListOk := trainRef01ListResult.([]any)
		if !trainRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", trainRef01ListResult)
		}

		// LOAD
		trainRef01MatchDt0 := map[string]any{}
		trainRef01DataDt0Loaded, err := trainRef01Ent.Load(trainRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if trainRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func trainBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "train", "TrainTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read train test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse train test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"train01", "train02", "train03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("KONKANRAILWAYLIVEPOSITION_TEST_TRAIN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KONKANRAILWAYLIVEPOSITION_TEST_TRAIN_ENTID": idmap,
		"KONKANRAILWAYLIVEPOSITION_TEST_LIVE":      "FALSE",
		"KONKANRAILWAYLIVEPOSITION_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["KONKANRAILWAYLIVEPOSITION_TEST_TRAIN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["KONKANRAILWAYLIVEPOSITION_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewKonkanRailwayLivePositionSDK(core.ToMapAny(mergedOpts))
	}

	live := env["KONKANRAILWAYLIVEPOSITION_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["KONKANRAILWAYLIVEPOSITION_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
