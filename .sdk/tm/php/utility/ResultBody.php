<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK utility: result_body

class KonkanRailwayLivePositionResultBody
{
    public static function call(KonkanRailwayLivePositionContext $ctx): ?KonkanRailwayLivePositionResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
