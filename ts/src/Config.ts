
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'KonkanRailwayLivePosition',
        slug: "konkan-railway-live-position",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://konkan-railway-api.vercel.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        train: {
        },
  
    }
  }


  entity = {
    "train": {
      "fields": [
        {
          "name": "currentStation",
          "short": "Current station where the train is located or last reported position",
          "type": "`$STRING`"
        },
        {
          "name": "delay",
          "short": "Delay in minutes (positive for late, negative for early, 0 for on time)",
          "type": "`$INTEGER`"
        },
        {
          "name": "destination",
          "short": "Destination station of the train",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "lastUpdated",
          "short": "Timestamp of the last position update",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "latitude",
          "short": "Current latitude coordinate of the train",
          "type": "`$NUMBER`"
        },
        {
          "format": "double",
          "name": "longitude",
          "short": "Current longitude coordinate of the train",
          "type": "`$NUMBER`"
        },
        {
          "name": "source",
          "short": "Source station of the train",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "Current status of the train",
          "type": "`$STRING`"
        },
        {
          "name": "trainName",
          "short": "Name of the train",
          "type": "`$STRING`"
        },
        {
          "name": "trainNumber",
          "short": "Unique identifier for the train",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "train",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/trains",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "trains"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "trains"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "10103",
                    "kind": "param",
                    "name": "id",
                    "orig": "train_number",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/trains/{trainNumber}",
              "rename": {
                "param": {
                  "trainNumber": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "trains"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "trains",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

