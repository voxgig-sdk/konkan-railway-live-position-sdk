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
            "name": "current_station",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "delay",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "destination",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "last_updated",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "latitude",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "longitude",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "source",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "train_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "train_number",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "train",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/api/trains",
                "parts": [
                  "api",
                  "trains",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
