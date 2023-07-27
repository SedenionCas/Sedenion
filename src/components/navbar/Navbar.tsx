import { IconCalculator } from "@tabler/icons-react";
import styles from "./Navbar.module.css";
import NavbarButton from "./NavbarButton";
import { MutableRefObject, useRef } from "react";
import { DockviewApi } from "dockview";

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
        <nav id={styles.navbar}>
            <NavbarButton
                icon={<IconCalculator />}
                title="calculator"
                onClick={spawnCalculator}
            />
            <p className="text-red-200">sadas</p>
        </nav>
    );
}