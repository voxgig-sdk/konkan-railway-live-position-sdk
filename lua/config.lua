-- KonkanRailwayLivePosition SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "KonkanRailwayLivePosition",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://konkan-railway-api.vercel.app",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["train"] = {},
      },
    },
    entity = {
      ["train"] = {
        ["fields"] = {
          {
            ["name"] = "currentStation",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "delay",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "destination",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lastUpdated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "latitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "longitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "source",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "trainName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "trainNumber",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "train",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/trains",
                ["parts"] = {
                  "api",
                  "trains",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "10103",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "train_number",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/trains/{trainNumber}",
                ["parts"] = {
                  "api",
                  "trains",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["trainNumber"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
