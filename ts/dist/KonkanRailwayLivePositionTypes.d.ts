export interface Train {
    currentStation?: string;
    delay?: number;
    destination?: string;
    id?: string;
    lastUpdated?: string;
    latitude?: number;
    longitude?: number;
    source?: string;
    status?: string;
    trainName?: string;
    trainNumber?: string;
}
export interface TrainLoadMatch {
    id: string;
}
export interface TrainListMatch {
    currentStation?: string;
    delay?: number;
    destination?: string;
    id?: string;
    lastUpdated?: string;
    latitude?: number;
    longitude?: number;
    source?: string;
    status?: string;
    trainName?: string;
    trainNumber?: string;
}
