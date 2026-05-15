<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK utility: prepare_body

class KonkanRailwayLivePositionPrepareBody
{
    public static function call(KonkanRailwayLivePositionContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
