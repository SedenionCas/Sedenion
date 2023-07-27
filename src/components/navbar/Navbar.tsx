import { IconCalculator } from "@tabler/icons-react";
import styles from "./Navbar.module.css";
import NavbarButton from "./NavbarButton";
import { MutableRefObject } from "react";
import { DockviewApi } from "dockview";

interface INavbarProps {
    dockviewApi: MutableRefObject<DockviewApi | null>
}

export default function Navbar({dockviewApi}:INavbarProps) {

    const spawnCalculator = () => {
        if (dockviewApi.current === null) return;
        dockviewApi.current.addPanel({
            id: "panel2",
            component: "basicCalc",
        });
    };

    return (
        <nav id={styles.navbar}>
            <NavbarButton
                icon={<IconCalculator />}
                title="calculator"
                onClick={spawnCalculator}
            />
        </nav>
    );
}
