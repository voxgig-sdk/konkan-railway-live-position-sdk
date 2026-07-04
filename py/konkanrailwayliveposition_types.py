# Typed models for the KonkanRailwayLivePosition SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Train(TypedDict, total=False):
    current_station: str
    delay: int
    destination: str
    last_updated: str
    latitude: float
    longitude: float
    source: str
    status: str
    train_name: str
    train_number: str


class TrainLoadMatch(TypedDict):
    id: str


class TrainListMatch(TypedDict, total=False):
    current_station: str
    delay: int
    destination: str
    last_updated: str
    latitude: float
    longitude: float
    source: str
    status: str
    train_name: str
    train_number: str
