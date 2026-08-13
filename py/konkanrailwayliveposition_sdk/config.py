# KonkanRailwayLivePosition SDK configuration


def make_config():
    return {
        "main": {
            "name": "KonkanRailwayLivePosition",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://konkan-railway-api.vercel.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "train": {},
            },
        },
        "entity": {
      "train": {
        "fields": [
          {
            "active": True,
            "name": "currentStation",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "delay",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "destination",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "lastUpdated",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "latitude",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "longitude",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "source",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "trainName",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "trainNumber",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "train",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/trains",
                "parts": [
                  "api",
                  "trains",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "10103",
                      "kind": "param",
                      "name": "id",
                      "orig": "train_number",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/trains/{trainNumber}",
                "parts": [
                  "api",
                  "trains",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "trainNumber": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
