package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTrainEntityFunc func(client *KonkanRailwayLivePositionSDK, entopts map[string]any) KonkanRailwayLivePositionEntity

