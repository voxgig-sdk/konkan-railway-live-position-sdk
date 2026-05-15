# KonkanRailwayLivePosition SDK utility: make_context
require_relative '../core/context'
module KonkanRailwayLivePositionUtilities
  MakeContext = ->(ctxmap, basectx) {
    KonkanRailwayLivePositionContext.new(ctxmap, basectx)
  }
end
