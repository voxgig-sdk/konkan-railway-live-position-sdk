<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK utility: feature_add

class KonkanRailwayLivePositionFeatureAdd
{
    public static function call(KonkanRailwayLivePositionContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
