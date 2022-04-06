import React from "react";
import * as ReactDOM from "react-dom";
import browser from "webextension-polyfill";
import type { Tabs, Runtime } from "webextension-polyfill";

let myPort: Runtime.Port | undefined
browser.tabs.query({ active: true, currentWindow: true }).then((tabs: Tabs.Tab[]) => {
    let currentTabId: number = 0
    if (tabs[0]) {
        currentTabId = tabs[0].id || 0;
    }
    myPort = browser.tabs.connect(currentTabId, {name: "port-from-popup"})
    ReactDOM.render(<div>hi</div>, document.getElementById("popup"));

});

