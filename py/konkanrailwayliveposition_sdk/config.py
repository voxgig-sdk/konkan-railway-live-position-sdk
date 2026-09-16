# KonkanRailwayLivePosition SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "lastUpdated",
            "short": "Timestamp of the last position update",
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "latitude",
            "short": "Current latitude coordinate of the train",
            "type": "`$NUMBER`",
          },
          {
            "format": "double",
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
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "api",
                  },
                  {
                    "lit": "trains",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "trains",
                ],
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
                "rename": {
                  "param": {
                    "trainNumber": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "trains",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "trains",
                  "{id}",
                ],
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
