# frozen_string_literal: true

# Typed models for the KonkanRailwayLivePosition SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Train entity data model.
#
# @!attribute [rw] currentStation
#   @return [String, nil]
#
# @!attribute [rw] delay
#   @return [Integer, nil]
#
# @!attribute [rw] destination
#   @return [String, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] trainName
#   @return [String, nil]
#
# @!attribute [rw] trainNumber
#   @return [String, nil]
Train = Struct.new(
  :currentStation,
  :delay,
  :destination,
  :lastUpdated,
  :latitude,
  :longitude,
  :source,
  :status,
  :trainName,
  :trainNumber,
  keyword_init: true
)

# Request payload for Train#load.
#
# @!attribute [rw] id
#   @return [String]
TrainLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Train#list.
#
# @!attribute [rw] currentStation
#   @return [String, nil]
#
# @!attribute [rw] delay
#   @return [Integer, nil]
#
# @!attribute [rw] destination
#   @return [String, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] trainName
#   @return [String, nil]
#
# @!attribute [rw] trainNumber
#   @return [String, nil]
TrainListMatch = Struct.new(
  :currentStation,
  :delay,
  :destination,
  :lastUpdated,
  :latitude,
  :longitude,
  :source,
  :status,
  :trainName,
  :trainNumber,
  keyword_init: true
)

