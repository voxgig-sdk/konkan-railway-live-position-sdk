import { KonkanRailwayLivePositionEntityBase } from '../KonkanRailwayLivePositionEntityBase';
import type { KonkanRailwayLivePositionSDK } from '../KonkanRailwayLivePositionSDK';
import type { Control } from '../types';
import type { Train, TrainLoadMatch, TrainListMatch } from '../KonkanRailwayLivePositionTypes';
declare class TrainEntity extends KonkanRailwayLivePositionEntityBase<Train> {
    constructor(client: KonkanRailwayLivePositionSDK, entopts: any);
    make(this: TrainEntity): TrainEntity;
    load(this: any, reqmatch?: TrainLoadMatch, ctrl?: Control): Promise<TrainEntity>;
    list(this: any, reqmatch?: TrainListMatch, ctrl?: Control): Promise<TrainEntity[]>;
}
export { TrainEntity };
