import React from "react";
import * as ReactDOM from "react-dom";
import browser from "webextension-polyfill";
import type { Tabs, Runtime } from "webextension-polyfill";
import { Solver } from "@src/components/Solver"

let myPort: Runtime.Port | undefined
browser.tabs.query({ active: true, currentWindow: true }).then((tabs: Tabs.Tab[]) => {
    let currentTabId: number = 0
    let url: string = ''
    if (tabs[0]) {
        const { id, url: currentUrl } = tabs[0]
        currentTabId = id || 0;
        const { host, pathname } = new URL(currentUrl || '')
        console.log({ host, pathname })
        if(host === 'www.nytimes.com' && /games\/wordle/.test(pathname)){
            url = currentUrl || ''
        }
    }
    if(url){
        browser.tabs.executeScript({
            code: `window.localStorage['nyt-wordle-state']`
        })
        .then((value: any[]) => {
            if(!(value instanceof Error)){
                const [ json ] = value
                const data = JSON.parse(json)
                ReactDOM.render(<Solver solution={data?.solution || ''}/>, document.getElementById("popup"));
            }
        });
    }else{
        ReactDOM.render(<div>
            this does not appear to be wordle
        </div>, document.getElementById("popup"));
    }

});

