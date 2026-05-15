<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK utility: prepare_method

class KonkanRailwayLivePositionPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(KonkanRailwayLivePositionContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
