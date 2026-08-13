# KonkanRailwayLivePosition SDK utility: make_context

from projectname_sdk.core.context import KonkanRailwayLivePositionContext


def make_context_util(ctxmap, basectx):
    return KonkanRailwayLivePositionContext(ctxmap, basectx)
