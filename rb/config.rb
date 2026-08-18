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
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "type" => "`$STRING`",
            },
            {
              "name" => "delay",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "destination",
              "type" => "`$STRING`",
            },
            {
              "name" => "lastUpdated",
              "type" => "`$STRING`",
            },
            {
              "name" => "latitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "longitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "source",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "type" => "`$STRING`",
            },
            {
              "name" => "trainName",
              "type" => "`$STRING`",
            },
            {
              "name" => "trainNumber",
              "type" => "`$STRING`",
            },
          ],
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
                  "parts" => [
                    "api",
                    "trains",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
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
                  "parts" => [
                    "api",
                    "trains",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "trainNumber" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
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
