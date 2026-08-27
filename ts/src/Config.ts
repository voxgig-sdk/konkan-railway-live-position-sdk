
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "name": "lastUpdated",
          "short": "Timestamp of the last position update",
          "type": "`$STRING`"
        },
        {
          "name": "latitude",
          "short": "Current latitude coordinate of the train",
          "type": "`$NUMBER`"
        },
        {
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
              "parts": [
                "api",
                "trains"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "api",
                "trains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "trainNumber": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
  config
}

