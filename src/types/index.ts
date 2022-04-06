import { PointerEvent } from "react";
import type { Runtime, WebRequest } from "webextension-polyfill";
import * as SharedTypes from "./sharedTypes"
export type Port = Runtime.Port
export type ActiveUrlType = SharedTypes.ActiveUrlType
export type BackgroundStateType = SharedTypes.BackgroundStateType
export type ClipType = SharedTypes.ClipType
export type Location = SharedTypes.Location
export type MultiSessionType = SharedTypes.MultiSessionType
export type ParsedSeconds = SharedTypes.ParsedSeconds
export type UserType = SharedTypes.UserType
export type SettingsType = SharedTypes.SettingsType
export type SequenceNode = SharedTypes.SequenceNode
export type SequenceType = SharedTypes.SequenceType
export type SequenceList = SharedTypes.SequenceList
export type Timecodes = SharedTypes.Timecodes
export type OnBeforeSendHeadersDetailsType = WebRequest.OnBeforeSendHeadersDetailsType
export type OnCompletedDetailsType = WebRequest.OnCompletedDetailsType
export type MessageSender = Runtime.MessageSender
export type PostMessageType = (x: BackgroundStateType) => void 
export type MessageHandlerArgs = { 
    modalClosed: boolean;
    setModalClosed: (x: boolean) => void;
}
export type LRType = "left" | "right"

export type MonitorQueueCallbackArgs = { 
    adPlaying: boolean;
    currentScene: [number, number];
    nonLinear: boolean;
    disabled: boolean;
    setCurrentScene: (x: [number, number]) => void;
    queueTimeoutId: ReturnType<typeof setTimeout> | undefined;
    setQueueTimeoutId: (x: ReturnType<typeof setTimeout> | undefined) => void;
    sliderRef: { current: HTMLElement } | null; 
    timecodeDetails: Timecodes; 
    sequence: SequenceType;
}
export type MovePlayheadArgs = {
    targetSeconds: number;
    timecodeDetails: Timecodes;
    slider: HTMLDivElement;
}
export type TimecodeAndClips = {
    timecodeDetails: Timecodes;
}



export type ClipsStateType = ClipType[];

export type CursorStyleType = {
    cursor: string;
};
export type BracketsType = [number, number, number]; 


export type DimensionsType = {
    width: number;
    height: number;
};

export type EventHandlersType<T> = {
    down: PointerEventType<T>;
    enter: PointerEventType<T>;
    leave: PointerEventType<T>;
    move: PointerEventType<T>;
    up: PointerEventType<T>;
    over: PointerEventType<T>;
};

export type PointerType<T> = PointerEvent<T>;

export type PointerEventType<T> = (e: PointerType<T>) => void;


export type TimelineFlexes = {
    flex: number;
    gap: boolean;
    start: number;
    end: number;
    key: string;
};

export type InitStateType = {
    sequences: SequenceType[];
    currentClip: [number, number];
    currentSequence: number;
    currentScene: [number, number];
    cursorStyle: CursorStyleType;
    hasSlider: boolean;
    hasVideo: boolean;
    location: Location;
    markerSeconds: number;
    modalClosed: boolean;
    mouseDownTime: number;
    movementDirection: LRType;
    previousClientX: number;
    queueTimeoutId: number;
    selectorVisible: boolean;
    timecodeDetails: Timecodes;
}

export type AnalyticsType = { 
    hits: number;
    ips: { 
        [ip: string] : {
            [datetime: string] : string
        };
    };
}
export type ShortUrlObject = { 
    analytics: AnalyticsType;
    createdBy: string;
    createdOn: number;
    origin: string;
    pathname: string;
    href: string;
    sequence: SequenceType;
    title: string;
    ipOrigin: string;
    id: number;
    duration: number;
}
export type SearchParamsReturn = {
    action: string;
    createdBy: string;
    currentSequence: number;
    hrefToHash: string;
    location: Location;
    newHref: string;
    sequences: SequenceType[];
    timecodeDetails: Timecodes;
    title: string;
} | false

