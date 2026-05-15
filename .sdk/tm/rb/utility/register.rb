# KonkanRailwayLivePosition SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

KonkanRailwayLivePositionUtility.registrar = ->(u) {
  u.clean = KonkanRailwayLivePositionUtilities::Clean
  u.done = KonkanRailwayLivePositionUtilities::Done
  u.make_error = KonkanRailwayLivePositionUtilities::MakeError
  u.feature_add = KonkanRailwayLivePositionUtilities::FeatureAdd
  u.feature_hook = KonkanRailwayLivePositionUtilities::FeatureHook
  u.feature_init = KonkanRailwayLivePositionUtilities::FeatureInit
  u.fetcher = KonkanRailwayLivePositionUtilities::Fetcher
  u.make_fetch_def = KonkanRailwayLivePositionUtilities::MakeFetchDef
  u.make_context = KonkanRailwayLivePositionUtilities::MakeContext
  u.make_options = KonkanRailwayLivePositionUtilities::MakeOptions
  u.make_request = KonkanRailwayLivePositionUtilities::MakeRequest
  u.make_response = KonkanRailwayLivePositionUtilities::MakeResponse
  u.make_result = KonkanRailwayLivePositionUtilities::MakeResult
  u.make_point = KonkanRailwayLivePositionUtilities::MakePoint
  u.make_spec = KonkanRailwayLivePositionUtilities::MakeSpec
  u.make_url = KonkanRailwayLivePositionUtilities::MakeUrl
  u.param = KonkanRailwayLivePositionUtilities::Param
  u.prepare_auth = KonkanRailwayLivePositionUtilities::PrepareAuth
  u.prepare_body = KonkanRailwayLivePositionUtilities::PrepareBody
  u.prepare_headers = KonkanRailwayLivePositionUtilities::PrepareHeaders
  u.prepare_method = KonkanRailwayLivePositionUtilities::PrepareMethod
  u.prepare_params = KonkanRailwayLivePositionUtilities::PrepareParams
  u.prepare_path = KonkanRailwayLivePositionUtilities::PreparePath
  u.prepare_query = KonkanRailwayLivePositionUtilities::PrepareQuery
  u.result_basic = KonkanRailwayLivePositionUtilities::ResultBasic
  u.result_body = KonkanRailwayLivePositionUtilities::ResultBody
  u.result_headers = KonkanRailwayLivePositionUtilities::ResultHeaders
  u.transform_request = KonkanRailwayLivePositionUtilities::TransformRequest
  u.transform_response = KonkanRailwayLivePositionUtilities::TransformResponse
}
