import { IconSettings } from "@tabler/icons-react";
import NavbarButton from "./NavbarButton";
import { PANEL_PLUGINS } from "@/plugins/manifest";

import type { MutableRefObject } from "react";
import type { DockviewApi } from "dockview";
import type { IPanelPlugin } from "sedenion-plugin-types";
import { getAppState } from "@/store";

interface INavbarProps {
    dockviewApi: MutableRefObject<DockviewApi | null>;
    setShowSettingsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
    dockviewApi,
    setShowSettingsModal,
}: INavbarProps) {
    const spawn = (plugin: IPanelPlugin, name: string) => {
        if (dockviewApi.current === null) throw Error("DockviewApi is null");

        const id = `${name} ${plugin.getIndex()}`;
        dockviewApi.current.addPanel({
            id,
            component: name,
        });
        plugin.incrementIndex()
    };

    const buttons = PANEL_PLUGINS.map((plugin) => {
        const appState = getAppState();
        if (!appState.enabledPlugins.has(plugin.name) || !plugin.enabledByDefault) return;

        const Icon = plugin.plugin.icon;
        return (
            <NavbarButton
                key={plugin.name}
                icon={<Icon />}
                title={plugin.name}
                onClick={() => {
                    console.log(`Spawning ${plugin.name}`);
                    spawn(plugin.plugin, plugin.name);
                }}
            />
        );
    });

    return (
        <nav className="fixed left-0 top-0 z-10 flex h-screen w-16 flex-col items-center justify-between border-r border-truegray-400 bg-truegray-600 text-truegray-50">
            <div>{buttons}</div>
            <div>
                <NavbarButton
                    icon={<IconSettings />}
                    title="settings"
                    onClick={() => {
                        setShowSettingsModal(true);
                    }}
                />
            </div>
        </nav>
    );
}
