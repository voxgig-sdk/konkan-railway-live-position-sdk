# KonkanRailwayLivePosition SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module KonkanRailwayLivePositionFeatures
  def self.make_feature(name)
    case name
    when "base"
      KonkanRailwayLivePositionBaseFeature.new
    when "test"
      KonkanRailwayLivePositionTestFeature.new
    else
      KonkanRailwayLivePositionBaseFeature.new
    end
  end
end
