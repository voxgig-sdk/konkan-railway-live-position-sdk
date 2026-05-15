# KonkanRailwayLivePosition SDK exists test

require "minitest/autorun"
require_relative "../KonkanRailwayLivePosition_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = KonkanRailwayLivePositionSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
