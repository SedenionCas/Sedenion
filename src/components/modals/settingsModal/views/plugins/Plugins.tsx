import { PANEL_PLUGINS } from "@/plugins/manifest";
import PluginCard from "./PluginCard";
import { getAppState, setAppState } from "@/store";

function Plugins() {
    const setEnabled = (name: string) => {
        const appState = getAppState();
        if (appState.enabledPlugins.has(name)) {
            appState.enabledPlugins.delete(name);
        } else {
            appState.enabledPlugins.add(name);
        }
        setAppState(appState);
        localStorage.setItem(
            "enabledPlugins",
            JSON.stringify(Array.from(appState.enabledPlugins))
        );
    };
    const appState = getAppState();
    const pluginCards = PANEL_PLUGINS.map((plugin) => (
        <PluginCard
            key={plugin.name}
            name={plugin.name}
            author={plugin.authors[0].name}
            authorUrl={plugin.authors[0].profile}
            version={plugin.version}
            enabled={
                appState.enabledPlugins.has(plugin.name) ||
                plugin.enabledByDefault
            }
            onClick={setEnabled}
        />
    ));

    return (
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 overflow-y-auto">
            {pluginCards}
        </div>
    );
}

export default Plugins;
