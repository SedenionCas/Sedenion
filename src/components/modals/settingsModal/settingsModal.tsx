import { useState } from "react";
import About from "./views/about";
import PrivacyPolicy from "./views/PrivacyPolicy";
import { PANEL_PLUGINS } from "@/plugins/manifest";
import GeneratedTab from "./views/GeneratedTab";
import Plugins from "./views/plugins/Plugins";
import { getAppState } from "@/store";

type Tab = {
    name: string;
    component: React.JSX.Element;
};

enum TabKind {
    Preset,
    CorePlugins,
}

type TabGroup = {
    name: string;
    tabKind: TabKind;
    tabs: Tab[];
};

const TAB_GROUPS: TabGroup[] = [
    {
        name: "Sedenion",
        tabKind: TabKind.Preset,
        tabs: [
            {
                name: "About",
                component: <About />,
            },
            {
                name: "Plugins",
                component: <Plugins/>
            },
            {
                name: "Privacy Policy",
                component: <PrivacyPolicy />,
            },
        ],
    },
    {
        name: "Plugins",
        tabKind: TabKind.CorePlugins,
        tabs: [],
    },
];

export default function SettingsModal() {
    const [viewComponent, setViewComponent] = useState<React.JSX.Element>(
        <About />
    );

    const tabButtonGroups = TAB_GROUPS.map((group) => {
        let buttons;
        if (group.tabKind === TabKind.CorePlugins) {
            buttons = PANEL_PLUGINS.map((plugin) => {
                const appState = getAppState();
                if (!appState.enabledPlugins.has(plugin.name)) return <></>;
                if (plugin.plugin.settings.length === 0) return <></>;
                return (
                    <button
                        onClick={() =>
                            setViewComponent(
                                <GeneratedTab
                                    settingsSections={plugin.plugin.settings}
                                />
                            )
                        }
                        key={plugin.name}
                        className="text rounded-md px-2  py-1 text-truegray-200 hover:bg-blue-600 hover:text-truegray-50"
                    >
                        {plugin.name}
                    </button>
                );
            });
        } else {
            buttons = group.tabs.map((tab) => (
                <button
                    onClick={() => setViewComponent(tab.component)}
                    key={tab.name}
                    className="text rounded-md px-2  py-1 text-truegray-200 hover:bg-blue-600 hover:text-truegray-50"
                >
                    {tab.name}
                </button>
            ));
        }

        return (
            <div key={group.name} className="mb-4 flex flex-col items-start">
                <h2 className="mb-2 text-lg font-bold text-truegray-100">
                    {group.name}
                </h2>
                {buttons}
            </div>
        );
    });

    return (
        <div className="flex h-full">
            <div className="h-full w-1/4 border-r border-truegray-400 px-3 pt-8">
                {tabButtonGroups}
            </div>
            <div className="overflow-x- h-full w-3/4 overflow-y-auto px-12 pt-8">
                {viewComponent}
            </div>
        </div>
    );
}
