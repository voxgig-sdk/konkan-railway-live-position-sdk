// Typed models for the KonkanRailwayLivePosition SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Train {
  currentStation?: string
  delay?: number
  destination?: string
  lastUpdated?: string
  latitude?: number
  longitude?: number
  source?: string
  status?: string
  trainName?: string
  trainNumber?: string
}

export interface TrainLoadMatch {
  id: string
}

export interface TrainListMatch {
  currentStation?: string
  delay?: number
  destination?: string
  lastUpdated?: string
  latitude?: number
  longitude?: number
  source?: string
  status?: string
  trainName?: string
  trainNumber?: string
}

