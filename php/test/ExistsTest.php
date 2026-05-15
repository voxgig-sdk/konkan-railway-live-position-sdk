<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK exists test

require_once __DIR__ . '/../konkanrailwayliveposition_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = KonkanRailwayLivePositionSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
