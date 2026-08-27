-- Typed models for the KonkanRailwayLivePosition SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Train
---@field currentStation? string
---@field delay? number
---@field destination? string
---@field id? string
---@field lastUpdated? string
---@field latitude? number
---@field longitude? number
---@field source? string
---@field status? string
---@field trainName? string
---@field trainNumber? string

---@class TrainLoadMatch
---@field id string

---@class TrainListMatch
---@field currentStation? string
---@field delay? number
---@field destination? string
---@field id? string
---@field lastUpdated? string
---@field latitude? number
---@field longitude? number
---@field source? string
---@field status? string
---@field trainName? string
---@field trainNumber? string

local M = {}

return M
