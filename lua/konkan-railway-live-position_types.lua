-- Typed models for the KonkanRailwayLivePosition SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Train
---@field current_station? string
---@field delay? number
---@field destination? string
---@field last_updated? string
---@field latitude? number
---@field longitude? number
---@field source? string
---@field status? string
---@field train_name? string
---@field train_number? string

---@class TrainLoadMatch
---@field id string

---@class TrainListMatch

local M = {}

return M
