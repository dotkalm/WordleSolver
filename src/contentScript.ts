import browser from "webextension-polyfill";
import type { Runtime, Tabs } from "webextension-polyfill"
import { App } from "@src/containers/App";

window.onload = (event: Event): void => {
    App()
};
