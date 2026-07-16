<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK base feature

class KonkanRailwayLivePositionBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(KonkanRailwayLivePositionContext $ctx, array $options): void {}
    public function PostConstruct(KonkanRailwayLivePositionContext $ctx): void {}
    public function PostConstructEntity(KonkanRailwayLivePositionContext $ctx): void {}
    public function SetData(KonkanRailwayLivePositionContext $ctx): void {}
    public function GetData(KonkanRailwayLivePositionContext $ctx): void {}
    public function GetMatch(KonkanRailwayLivePositionContext $ctx): void {}
    public function SetMatch(KonkanRailwayLivePositionContext $ctx): void {}
    public function PrePoint(KonkanRailwayLivePositionContext $ctx): void {}
    public function PreSpec(KonkanRailwayLivePositionContext $ctx): void {}
    public function PreRequest(KonkanRailwayLivePositionContext $ctx): void {}
    public function PreResponse(KonkanRailwayLivePositionContext $ctx): void {}
    public function PreResult(KonkanRailwayLivePositionContext $ctx): void {}
    public function PreDone(KonkanRailwayLivePositionContext $ctx): void {}
    public function PreUnexpected(KonkanRailwayLivePositionContext $ctx): void {}
}
