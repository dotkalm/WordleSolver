export type UserType = { 
    name: string;
    handle: string;
    userId: string;
    signUpDate: number;
    lastActivity: number;
}
export type ClipType = {
    start: number;
    end: number;
};
export type ParsedSeconds = {
    hours: number;
    minutes: number;
    seconds: number;
};
export type Timecodes = {
    current: ParsedSeconds;
    total: ParsedSeconds;
    currentSeconds: number;
    totalSeconds: number;
};
export type ActiveUrlType = { 
    href: string;
    userId: string;
}
export type SettingsState = { 
    disabled?: boolean;
    nonLinear?: boolean;
    isRunning?: boolean;
    linearMode?: boolean;
}
export type SettingsType = { 
    name: string;
    enabled: boolean;
}
export type SequenceNode = ClipType & { 
    next: null | SequenceNode
}
export type Location = {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
};
export type SequenceType = {
    createdBy?: string;
    createdOn?: number;
    shortLinkId?: string;
    head: SequenceNode | null;
    tail: SequenceNode | null;
    count: number 
} 
export type BackgroundStateType = {
    hrefToHash: string;
    urlHash?: string;
    action: string;
    currentSequence: number;
    location: Location;
    sequences: SequenceType[];
    timecodeDetails: Timecodes;
    title: string;
    createdBy: string;
    lastUpdated: number;
    createdOn: number;
    nonLinear?: boolean;
};
export type MultiSessionType = { 
    [href: string]: BackgroundStateType;
}
export type SequenceList = Pick<BackgroundStateType, 'action' | 'createdBy' | 'currentSequence' | 'hrefToHash' | 'location' | 'sequences' | 'timecodeDetails' | 'title' | 'urlHash'> 

