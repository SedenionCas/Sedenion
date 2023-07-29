import { IconCalculator, IconSettings } from "@tabler/icons-react";
import NavbarButton from "./NavbarButton";
import type { MutableRefObject } from "react";
import type { DockviewApi } from "dockview";
import { getAppState, setAppState } from "../../store";

interface INavbarProps {
    dockviewApi: MutableRefObject<DockviewApi | null>;
}

export default function Navbar({ dockviewApi }: INavbarProps) {
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

    return (
        <nav className="fixed left-0 top-0 z-10 flex flex-col h-screen w-16 justify-between items-center bg-truegray-600 text-truegray-50">
            <div>
                <NavbarButton
                    icon={<IconCalculator />}
                    title="calculator"
                    onClick={spawnCalculator}
                />
            </div>
            <div>
                <NavbarButton
                    icon={<IconSettings />}
                    title="settings"
                    onClick={() => {}}
                />
            </div>
        </nav>
    );
}
