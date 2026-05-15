<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class KonkanRailwayLivePositionMakeContext
{
    public static function call(array $ctxmap, ?KonkanRailwayLivePositionContext $basectx): KonkanRailwayLivePositionContext
    {
        return new KonkanRailwayLivePositionContext($ctxmap, $basectx);
    }
}
