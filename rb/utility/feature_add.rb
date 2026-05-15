# KonkanRailwayLivePosition SDK utility: feature_add
module KonkanRailwayLivePositionUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
