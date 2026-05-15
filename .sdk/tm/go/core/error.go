package core

type KonkanRailwayLivePositionError struct {
	IsKonkanRailwayLivePositionError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewKonkanRailwayLivePositionError(code string, msg string, ctx *Context) *KonkanRailwayLivePositionError {
	return &KonkanRailwayLivePositionError{
		IsKonkanRailwayLivePositionError: true,
		Sdk:              "KonkanRailwayLivePosition",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *KonkanRailwayLivePositionError) Error() string {
	return e.Msg
}
