<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK utility: feature_hook

class KonkanRailwayLivePositionFeatureHook
{
    public static function call(KonkanRailwayLivePositionContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
