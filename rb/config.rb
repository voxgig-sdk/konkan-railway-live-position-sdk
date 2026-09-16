# KonkanRailwayLivePosition SDK configuration

module KonkanRailwayLivePositionConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "KonkanRailwayLivePosition",
        "slug" => "konkan-railway-live-position",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://konkan-railway-api.vercel.app",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "train" => {},
        },
      },
      "entity" => {
        "train" => {
          "fields" => [
            {
              "name" => "currentStation",
              "short" => "Current station where the train is located or last reported position",
              "type" => "`$STRING`",
            },
            {
              "name" => "delay",
              "short" => "Delay in minutes (positive for late, negative for early, 0 for on time)",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "destination",
              "short" => "Destination station of the train",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "lastUpdated",
              "short" => "Timestamp of the last position update",
              "type" => "`$STRING`",
            },
            {
              "format" => "double",
              "name" => "latitude",
              "short" => "Current latitude coordinate of the train",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "double",
              "name" => "longitude",
              "short" => "Current longitude coordinate of the train",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "source",
              "short" => "Source station of the train",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "short" => "Current status of the train",
              "type" => "`$STRING`",
            },
            {
              "name" => "trainName",
              "short" => "Name of the train",
              "type" => "`$STRING`",
            },
            {
              "name" => "trainNumber",
              "short" => "Unique identifier for the train",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "train",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/trains",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "trains",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "trains",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "10103",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "train_number",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/trains/{trainNumber}",
                  "rename" => {
                    "param" => {
                      "trainNumber" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "trains",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "trains",
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    KonkanRailwayLivePositionFeatures.make_feature(name)
  end
end
