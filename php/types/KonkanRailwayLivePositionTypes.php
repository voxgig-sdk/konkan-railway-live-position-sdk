<?php
declare(strict_types=1);

// Typed models for the KonkanRailwayLivePosition SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Train entity data model. */
class Train
{
    public ?string $current_station = null;
    public ?int $delay = null;
    public ?string $destination = null;
    public ?string $last_updated = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $train_name = null;
    public ?string $train_number = null;
}

/** Request payload for Train#load. */
class TrainLoadMatch
{
    public string $id;
}

/** Request payload for Train#list. */
class TrainListMatch
{
    public ?string $current_station = null;
    public ?int $delay = null;
    public ?string $destination = null;
    public ?string $last_updated = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $train_name = null;
    public ?string $train_number = null;
}

