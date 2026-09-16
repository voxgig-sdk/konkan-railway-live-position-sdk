"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TrainEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KONKAN_RAILWAY_LIVE_POSITION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KONKAN_RAILWAY_LIVE_POSITION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KonkanRailwayLivePositionSDK.test();
        const ent = testsdk.Train();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KONKAN_RAILWAY_LIVE_POSITION_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'train.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "currentStation", "req": false, "short": "Current station where the train is located or last reported position", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "delay", "req": false, "short": "Delay in minutes (positive for late, negative for early, 0 for on time)", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "destination", "req": false, "short": "Destination station of the train", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "date-time", "name": "lastUpdated", "req": false, "short": "Timestamp of the last position update", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "double", "name": "latitude", "req": false, "short": "Current latitude coordinate of the train", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "format": "double", "name": "longitude", "req": false, "short": "Current longitude coordinate of the train", "type": "`$NUMBER`", "index$": 6 }, { "active": true, "name": "source", "req": false, "short": "Source station of the train", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "status", "req": false, "short": "Current status of the train", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "trainName", "req": false, "short": "Name of the train", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "trainNumber", "req": false, "short": "Unique identifier for the train", "type": "`$STRING`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "train", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/trains", "json": "{\"operationId\":\"getAllTrains\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"currentStation\":{\"description\":\"Current station where the train is located or last reported position\",\"example\":\"Ratnagiri\",\"type\":\"string\"},\"delay\":{\"description\":\"Delay in minutes (positive for late, negative for early, 0 for on time)\",\"example\":15,\"type\":\"integer\"},\"destination\":{\"description\":\"Destination station of the train\",\"example\":\"Madgaon\",\"type\":\"string\"},\"lastUpdated\":{\"description\":\"Timestamp of the last position update\",\"example\":\"2023-10-15T14:30:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"latitude\":{\"description\":\"Current latitude coordinate of the train\",\"example\":17.0076,\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Current longitude coordinate of the train\",\"example\":73.3197,\"format\":\"double\",\"type\":\"number\"},\"source\":{\"description\":\"Source station of the train\",\"example\":\"Mumbai CST\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the train\",\"enum\":[\"Running\",\"Delayed\",\"On Time\",\"Arrived\",\"Departed\"],\"example\":\"Running\",\"type\":\"string\"},\"trainName\":{\"description\":\"Name of the train\",\"example\":\"Mandovi Express\",\"type\":\"string\"},\"trainNumber\":{\"description\":\"Unique identifier for the train\",\"example\":\"10103\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of trains\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Train not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"example\":\"The requested train number does not exist in the Konkan Railway network\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":404,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/trains", "segments": [{ "lit": "api" }, { "lit": "trains" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "10103", "kind": "param", "name": "id", "orig": "train_number", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/trains/{trainNumber}", "json": "{\"operationId\":\"getTrainByNumber\",\"parameters\":[{\"description\":\"The unique train number to retrieve position information\",\"example\":\"10103\",\"in\":\"path\",\"name\":\"trainNumber\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"currentStation\":{\"description\":\"Current station where the train is located or last reported position\",\"example\":\"Ratnagiri\",\"type\":\"string\"},\"delay\":{\"description\":\"Delay in minutes (positive for late, negative for early, 0 for on time)\",\"example\":15,\"type\":\"integer\"},\"destination\":{\"description\":\"Destination station of the train\",\"example\":\"Madgaon\",\"type\":\"string\"},\"lastUpdated\":{\"description\":\"Timestamp of the last position update\",\"example\":\"2023-10-15T14:30:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"latitude\":{\"description\":\"Current latitude coordinate of the train\",\"example\":17.0076,\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Current longitude coordinate of the train\",\"example\":73.3197,\"format\":\"double\",\"type\":\"number\"},\"source\":{\"description\":\"Source station of the train\",\"example\":\"Mumbai CST\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the train\",\"enum\":[\"Running\",\"Delayed\",\"On Time\",\"Arrived\",\"Departed\"],\"example\":\"Running\",\"type\":\"string\"},\"trainName\":{\"description\":\"Name of the train\",\"example\":\"Mandovi Express\",\"type\":\"string\"},\"trainNumber\":{\"description\":\"Unique identifier for the train\",\"example\":\"10103\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with train details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Train not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"example\":\"The requested train number does not exist in the Konkan Railway network\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":404,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Train not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Train not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"example\":\"The requested train number does not exist in the Konkan Railway network\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":404,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/trains/{trainNumber}", "rename": { "param": { "trainNumber": "id" } }, "segments": [{ "lit": "api" }, { "lit": "trains" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "train", "name__orig": "train", "Name": "Train", "name_": "train", "name-": "train", "NAME": "TRAIN", "index$": 0 }, { "active": true, "entity": "train", "key$": "BasicTrainFlow", "kind": "basic", "name": "BasicTrainFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "train_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "train_ref01", "srcdatavar": "train_ref01_data", "suffix": "_dt0" }, "match": { "id": "train01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-train_ref01" } }], "index$": 1 }] }, 'Train');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let train_ref01_data = Object.values(setup.data.existing.train)[0];
        // LIST
        const train_ref01_ent = client.Train();
        const train_ref01_match = {};
        const train_ref01_list = (await train_ref01_ent.list(train_ref01_match)).map((e) => e.data());
        // LOAD
        const train_ref01_match_dt0 = {};
        train_ref01_match_dt0.id = train_ref01_data.id;
        const train_ref01_data_dt0 = (await train_ref01_ent.load(train_ref01_match_dt0)).data();
        (0, node_assert_1.default)(train_ref01_data_dt0.id === train_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/train/TrainTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KonkanRailwayLivePositionSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['train01', 'train02', 'train03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KONKAN_RAILWAY_LIVE_POSITION_TEST_TRAIN_ENTID': idmap,
        'KONKAN_RAILWAY_LIVE_POSITION_TEST_LIVE': 'FALSE',
        'KONKAN_RAILWAY_LIVE_POSITION_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['KONKAN_RAILWAY_LIVE_POSITION_TEST_TRAIN_ENTID'];
    const live = 'TRUE' === env.KONKAN_RAILWAY_LIVE_POSITION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KONKAN_RAILWAY_LIVE_POSITION_TEST_TRAIN_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.KonkanRailwayLivePositionSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.KONKAN_RAILWAY_LIVE_POSITION_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=TrainEntity.test.js.map