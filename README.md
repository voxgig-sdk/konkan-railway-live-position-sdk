# KonkanRailwayLivePosition SDK

Live positions and station data for trains running on India's Konkan Railway network

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Konkan Railway Live Position

The Konkan Railway Live Position API exposes near real-time information about trains operating on the [Konkan Railway](https://konkan-railway-api.vercel.app), the coastal line that connects Maharashtra, Goa and Karnataka in western India. It is a small community-built JSON service hosted on Vercel.

What you get from the API:

- `GET /api/v4/fetchStations` returns the list of stations on the route, including name, state, distance from the line origin, a station-size classification and a short description.
- `GET /api/v4/fetchTrains` returns the live status of trains currently moving on the network.

Responses are JSON wrapped in a `success` flag and (for stations) a `count` field. CORS is enabled on both endpoints, no authentication is required, and no rate limits are documented. Treat the data as best-effort: response times for the stations list can exceed two seconds.

## Try it

**TypeScript**
```bash
npm install konkan-railway-live-position
```

**Python**
```bash
pip install konkan-railway-live-position-sdk
```

**PHP**
```bash
composer require voxgig/konkan-railway-live-position-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/konkan-railway-live-position-sdk/go
```

**Ruby**
```bash
gem install konkan-railway-live-position-sdk
```

**Lua**
```bash
luarocks install konkan-railway-live-position-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { KonkanRailwayLivePositionSDK } from 'konkan-railway-live-position'

const client = new KonkanRailwayLivePositionSDK({})

// List all trains
const trains = await client.Train().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o konkan-railway-live-position-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "konkan-railway-live-position": {
      "command": "/abs/path/to/konkan-railway-live-position-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Train** | A train currently running on the Konkan Railway, with its live position information; served from `GET /api/v4/fetchTrains`. | `/api/trains` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from konkanrailwayliveposition_sdk import KonkanRailwayLivePositionSDK

client = KonkanRailwayLivePositionSDK({})

# List all trains
trains, err = client.Train(None).list(None, None)

# Load a specific train
train, err = client.Train(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'konkanrailwayliveposition_sdk.php';

$client = new KonkanRailwayLivePositionSDK([]);

// List all trains
[$trains, $err] = $client->Train(null)->list(null, null);

// Load a specific train
[$train, $err] = $client->Train(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/konkan-railway-live-position-sdk/go"

client := sdk.NewKonkanRailwayLivePositionSDK(map[string]any{})

// List all trains
trains, err := client.Train(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "KonkanRailwayLivePosition_sdk"

client = KonkanRailwayLivePositionSDK.new({})

# List all trains
trains, err = client.Train(nil).list(nil, nil)

# Load a specific train
train, err = client.Train(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("konkan-railway-live-position_sdk")

local client = sdk.new({})

-- List all trains
local trains, err = client:Train(nil):list(nil, nil)

-- Load a specific train
local train, err = client:Train(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = KonkanRailwayLivePositionSDK.test()
const result = await client.Train().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = KonkanRailwayLivePositionSDK.test(None, None)
result, err = client.Train(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = KonkanRailwayLivePositionSDK::test(null, null);
[$result, $err] = $client->Train(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Train(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = KonkanRailwayLivePositionSDK.test(nil, nil)
result, err = client.Train(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Train(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Konkan Railway Live Position

- Upstream: [https://konkan-railway-api.vercel.app](https://konkan-railway-api.vercel.app)
- API docs: [https://freepublicapis.com/konkan-railway-live-position](https://freepublicapis.com/konkan-railway-live-position)

---

Generated from the Konkan Railway Live Position OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
