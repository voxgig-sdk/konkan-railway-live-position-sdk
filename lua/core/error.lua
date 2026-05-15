-- KonkanRailwayLivePosition SDK error

local KonkanRailwayLivePositionError = {}
KonkanRailwayLivePositionError.__index = KonkanRailwayLivePositionError


function KonkanRailwayLivePositionError.new(code, msg, ctx)
  local self = setmetatable({}, KonkanRailwayLivePositionError)
  self.is_sdk_error = true
  self.sdk = "KonkanRailwayLivePosition"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function KonkanRailwayLivePositionError:error()
  return self.msg
end


function KonkanRailwayLivePositionError:__tostring()
  return self.msg
end


return KonkanRailwayLivePositionError
