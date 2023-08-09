import { IconCalculator, IconPencilBolt, IconSettings } from "@tabler/icons-react";
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
    const spawnCalculator = () => {
        if (dockviewApi.current === null) return;
        const state = getAppState();
        dockviewApi.current.addPanel({
            id: "Calculator " + state.calculatorIndex,
            component: "basicCalc",
        });

        state.calculatorIndex++;
        setAppState(state);
    };
    const spawnExcalidraw = () => {
        if (dockviewApi.current === null) return;
        const state = getAppState();
        dockviewApi.current.addPanel({
            id: "Excalidraw " + state.excalidrawIndex,
            component: "excalidraw",
        });

        state.excalidrawIndex++;
        setAppState(state);
    };

    return (
        <nav className="fixed left-0 top-0 z-10 flex h-screen w-16 flex-col items-center justify-between border-r border-truegray-400 bg-truegray-600 text-truegray-50">
            <div>
                <NavbarButton
                    icon={<IconCalculator />}
                    title="calculator"
                    onClick={spawnCalculator}
                />
                <NavbarButton
                    icon={<IconPencilBolt />}
                    title="Excalidraw"
                    onClick={spawnExcalidraw}
                />
            </div>
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
