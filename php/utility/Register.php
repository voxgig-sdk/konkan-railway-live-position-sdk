<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

KonkanRailwayLivePositionUtility::setRegistrar(function (KonkanRailwayLivePositionUtility $u): void {
    $u->clean = [KonkanRailwayLivePositionClean::class, 'call'];
    $u->done = [KonkanRailwayLivePositionDone::class, 'call'];
    $u->make_error = [KonkanRailwayLivePositionMakeError::class, 'call'];
    $u->feature_add = [KonkanRailwayLivePositionFeatureAdd::class, 'call'];
    $u->feature_hook = [KonkanRailwayLivePositionFeatureHook::class, 'call'];
    $u->feature_init = [KonkanRailwayLivePositionFeatureInit::class, 'call'];
    $u->fetcher = [KonkanRailwayLivePositionFetcher::class, 'call'];
    $u->make_fetch_def = [KonkanRailwayLivePositionMakeFetchDef::class, 'call'];
    $u->make_context = [KonkanRailwayLivePositionMakeContext::class, 'call'];
    $u->make_options = [KonkanRailwayLivePositionMakeOptions::class, 'call'];
    $u->make_request = [KonkanRailwayLivePositionMakeRequest::class, 'call'];
    $u->make_response = [KonkanRailwayLivePositionMakeResponse::class, 'call'];
    $u->make_result = [KonkanRailwayLivePositionMakeResult::class, 'call'];
    $u->make_point = [KonkanRailwayLivePositionMakePoint::class, 'call'];
    $u->make_spec = [KonkanRailwayLivePositionMakeSpec::class, 'call'];
    $u->make_url = [KonkanRailwayLivePositionMakeUrl::class, 'call'];
    $u->param = [KonkanRailwayLivePositionParam::class, 'call'];
    $u->prepare_auth = [KonkanRailwayLivePositionPrepareAuth::class, 'call'];
    $u->prepare_body = [KonkanRailwayLivePositionPrepareBody::class, 'call'];
    $u->prepare_headers = [KonkanRailwayLivePositionPrepareHeaders::class, 'call'];
    $u->prepare_method = [KonkanRailwayLivePositionPrepareMethod::class, 'call'];
    $u->prepare_params = [KonkanRailwayLivePositionPrepareParams::class, 'call'];
    $u->prepare_path = [KonkanRailwayLivePositionPreparePath::class, 'call'];
    $u->prepare_query = [KonkanRailwayLivePositionPrepareQuery::class, 'call'];
    $u->result_basic = [KonkanRailwayLivePositionResultBasic::class, 'call'];
    $u->result_body = [KonkanRailwayLivePositionResultBody::class, 'call'];
    $u->result_headers = [KonkanRailwayLivePositionResultHeaders::class, 'call'];
    $u->transform_request = [KonkanRailwayLivePositionTransformRequest::class, 'call'];
    $u->transform_response = [KonkanRailwayLivePositionTransformResponse::class, 'call'];
});
