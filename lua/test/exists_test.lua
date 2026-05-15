-- ProjectName SDK exists test

local sdk = require("konkan-railway-live-position_sdk")

describe("KonkanRailwayLivePositionSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
