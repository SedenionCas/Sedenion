import "./init.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.less";
import {
    PluginProvider,
    RendererPlugin,
    createPluginStore,
} from "react-pluggable";
import { LoadPanelPlugins } from "./plugins/PluginLoader.ts";
import { getAppState, setAppState } from "./store.ts";
import { applyTheme } from "./themes/ThemeLoader.ts";

const pluginStore = createPluginStore();
pluginStore.install(new RendererPlugin());

const plugins = LoadPanelPlugins(pluginStore);
const appState = getAppState();
appState.plugins = plugins;
setAppState(appState);

applyTheme("gruvbox");

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PluginProvider pluginStore={pluginStore}>
            <App />
        </PluginProvider>
    </React.StrictMode>
);
