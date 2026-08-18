
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


  main = {
    name: 'KonkanRailwayLivePosition',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "delay",
          "type": "`$INTEGER`"
        },
        {
          "name": "destination",
          "type": "`$STRING`"
        },
        {
          "name": "lastUpdated",
          "type": "`$STRING`"
        },
        {
          "name": "latitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "longitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "source",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "type": "`$STRING`"
        },
        {
          "name": "trainName",
          "type": "`$STRING`"
        },
        {
          "name": "trainNumber",
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

