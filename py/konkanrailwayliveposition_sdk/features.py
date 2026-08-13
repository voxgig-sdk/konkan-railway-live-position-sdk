# KonkanRailwayLivePosition SDK feature factory

from konkanrailwayliveposition_sdk.feature.base_feature import KonkanRailwayLivePositionBaseFeature
from konkanrailwayliveposition_sdk.feature.test_feature import KonkanRailwayLivePositionTestFeature


def _make_feature(name):
    features = {
        "base": lambda: KonkanRailwayLivePositionBaseFeature(),
        "test": lambda: KonkanRailwayLivePositionTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
