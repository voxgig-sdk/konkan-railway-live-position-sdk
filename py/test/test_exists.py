# ProjectName SDK exists test

import pytest
from konkanrailwayliveposition_sdk import KonkanRailwayLivePositionSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = KonkanRailwayLivePositionSDK.test(None, None)
        assert testsdk is not None
