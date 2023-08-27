import "./init.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.less";
import { PluginProvider, RendererPlugin, createPluginStore } from "react-pluggable";
import { LoadPanelPlugins } from "./util/PluginLoader.ts";

const pluginStore = createPluginStore();
pluginStore.install(new RendererPlugin());

LoadPanelPlugins(pluginStore);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PluginProvider pluginStore={pluginStore}>
            <App />
        </PluginProvider>
    </React.StrictMode>
);
