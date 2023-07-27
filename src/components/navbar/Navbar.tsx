import { IconCalculator } from "@tabler/icons-react";
import NavbarButton from "./NavbarButton";
import type { MutableRefObject } from "react";
import { useRef } from "react";
import type { DockviewApi } from "dockview";

interface INavbarProps {
    dockviewApi: MutableRefObject<DockviewApi | null>;
}

interface IPanelCounts {
    options: number;
}

export default function Navbar({ dockviewApi }: INavbarProps) {
    const panelCounts = useRef<IPanelCounts>({ options: 2 });
    const spawnCalculator = () => {
        if (dockviewApi.current === null) return;
        dockviewApi.current.addPanel({
            id: "panel " + panelCounts.current.options,
            component: "basicCalc",
        });
        panelCounts.current.options++;
    };

    return (
        <nav className="fixed left-0 top-0 z-10 h-screen w-16 bg-truegray-500 text-truegray-50 flex justify-center">
            <NavbarButton
                icon={<IconCalculator />}
                title="calculator"
                onClick={spawnCalculator}
            />
        </nav>
    );
}
