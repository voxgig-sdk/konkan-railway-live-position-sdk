# KonkanRailwayLivePosition SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "KonkanRailwayLivePosition",
            "slug": "konkan-railway-live-position",
            "version": "0.0.1",
            "target": "py",
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
            "name": "currentStation",
            "short": "Current station where the train is located or last reported position",
            "type": "`$STRING`",
          },
          {
            "name": "delay",
            "short": "Delay in minutes (positive for late, negative for early, 0 for on time)",
            "type": "`$INTEGER`",
          },
          {
            "name": "destination",
            "short": "Destination station of the train",
            "type": "`$STRING`",
          },
          {
            "name": "lastUpdated",
            "short": "Timestamp of the last position update",
            "type": "`$STRING`",
          },
          {
            "name": "latitude",
            "short": "Current latitude coordinate of the train",
            "type": "`$NUMBER`",
          },
          {
            "name": "longitude",
            "short": "Current longitude coordinate of the train",
            "type": "`$NUMBER`",
          },
          {
            "name": "source",
            "short": "Source station of the train",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Current status of the train",
            "type": "`$STRING`",
          },
          {
            "name": "trainName",
            "short": "Name of the train",
            "type": "`$STRING`",
          },
          {
            "name": "trainNumber",
            "short": "Unique identifier for the train",
            "type": "`$STRING`",
          },
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
                  "trains",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
