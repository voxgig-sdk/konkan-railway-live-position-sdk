-- KonkanRailwayLivePosition SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "KonkanRailwayLivePosition",
      slug = "konkan-railway-live-position",
      version = "0.0.1",
      target = "lua",
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
            ["short"] = "Current station where the train is located or last reported position",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "delay",
            ["short"] = "Delay in minutes (positive for late, negative for early, 0 for on time)",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "destination",
            ["short"] = "Destination station of the train",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lastUpdated",
            ["short"] = "Timestamp of the last position update",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "latitude",
            ["short"] = "Current latitude coordinate of the train",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "longitude",
            ["short"] = "Current longitude coordinate of the train",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "source",
            ["short"] = "Source station of the train",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Current status of the train",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "trainName",
            ["short"] = "Name of the train",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "trainNumber",
            ["short"] = "Unique identifier for the train",
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
