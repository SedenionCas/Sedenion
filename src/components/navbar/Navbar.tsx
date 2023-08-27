import { IconSettings } from "@tabler/icons-react";
import NavbarButton from "./NavbarButton";
import type { MutableRefObject } from "react";
import type { DockviewApi } from "dockview";
import { getAppState, setAppState } from "../../store";

interface INavbarProps {
    dockviewApi: MutableRefObject<DockviewApi | null>;
    setShowSettingsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
    dockviewApi,
    setShowSettingsModal,
}: INavbarProps) {
    const appState = getAppState();

    const spawn = (name: string) => {
        if (dockviewApi.current === null) throw Error("DockviewApi is null");
        if (!(name + "Index" in appState))
            throw Error(`Invalid panel name: ${name}`);

        const state = getAppState();
        // @ts-expect-error ts(7053) checked above
        const id = `${name} ${state[name + "Index"]}`;
        dockviewApi.current.addPanel({
            id,
            component: name,
        });

        // @ts-expect-error ts(7053) checked above
        state[name + "Index"]++;
        setAppState(state);
    };

    const buttons = appState.plugins.map((plugin) => {
        const Icon = plugin.icon;
        return (
            <NavbarButton
                key={plugin.name}
                icon={<Icon />}
                title={plugin.name}
                onClick={() => {
                    console.log(`Spawning ${plugin.name}`);
                    spawn(plugin.name);
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
