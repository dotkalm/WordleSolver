import browser from "webextension-polyfill"
import type { Runtime } from "webextension-polyfill"
import { isType } from "@src/actions/isType"
import { 
    BackgroundStateType as ContentScriptMessageType, 
    MultiSessionType, 
} from "@src/types"

type PopUpMessageType = { 
    activeUrl?: string;
    popUpState: { 
        closed?: boolean;
        popup?: boolean;
        disabled?: boolean;
        nonLinear?: boolean;
    };
    userId?: string;
}
export class Bridge{
    port: Runtime.Port | undefined;
    constructor(){
        this.port = undefined;
        browser.runtime.onConnect.addListener(this.connection)
    }
    connection(runtimePort: Runtime.Port){
        if(!this.port){
            this.port = runtimePort
        }
        runtimePort.onMessage.addListener((
            message: unknown, 
            port: Runtime.Port
        ) => {
            const currentTab = port?.sender?.tab
            type EnablePopUp = { 
                enablePopup: boolean 
            }
            const initPopup = isType<EnablePopUp>(message || undefined)
            const csMessageType = isType<ContentScriptMessageType>(message || undefined)
            const popupMsg = message as EnablePopUp 
            console.log(message)
            if(initPopup && popupMsg.enablePopup !== undefined && currentTab){
                currentTab.id && port.postMessage({
                    status: 'good'
                })
            }
        })
        runtimePort.onDisconnect.addListener((runtimePort: Runtime.Port) => {
            console.log("<--- port disconnected")
        })
    }
}


