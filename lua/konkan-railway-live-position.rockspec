package = "voxgig-sdk-konkan-railway-live-position"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/konkan-railway-live-position-sdk.git"
}
description = {
  summary = "KonkanRailwayLivePosition SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["konkan-railway-live-position_sdk"] = "konkan-railway-live-position_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
