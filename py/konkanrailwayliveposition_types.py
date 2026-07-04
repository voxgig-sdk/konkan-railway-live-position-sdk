# Typed models for the KonkanRailwayLivePosition SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Train:
    current_station: Optional[str] = None
    delay: Optional[int] = None
    destination: Optional[str] = None
    last_updated: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    source: Optional[str] = None
    status: Optional[str] = None
    train_name: Optional[str] = None
    train_number: Optional[str] = None


@dataclass
class TrainLoadMatch:
    id: str


@dataclass
class TrainListMatch:
    current_station: Optional[str] = None
    delay: Optional[int] = None
    destination: Optional[str] = None
    last_updated: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    source: Optional[str] = None
    status: Optional[str] = None
    train_name: Optional[str] = None
    train_number: Optional[str] = None

