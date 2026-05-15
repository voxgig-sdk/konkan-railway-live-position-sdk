<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class KonkanRailwayLivePositionFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new KonkanRailwayLivePositionBaseFeature();
            case "test":
                return new KonkanRailwayLivePositionTestFeature();
            default:
                return new KonkanRailwayLivePositionBaseFeature();
        }
    }
}
