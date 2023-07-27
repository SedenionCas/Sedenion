import {
    DockviewReadyEvent,
    DockviewReact,
    DockviewApi,
    DockviewComponent,
} from "dockview";
import PanelBuilder from "./components/PanelBuilder";
import Navbar from "./components/navbar/Navbar";
import styles from "./App.module.css";
import { MutableRefObject, useRef } from "react";

interface IComponentProps {
    dockviewApi: MutableRefObject<DockviewApi | null>;
}

const Component = ({ dockviewApi }: IComponentProps) => {
    const onReady = (event: DockviewReadyEvent) => {
        event.api.addPanel({
            id: "panel 1",
            component: "basicCalc",
        });

        dockviewApi.current = event.api;
    };

    return (
        <DockviewReact
            components={PanelBuilder()}
            tabComponents={{}}
            onReady={onReady}
        />
    );
};

export default function App() {
    const dockviewApiRef = useRef<DockviewApi | null>(null);
    return (
        <div id={styles.container} className="dockview-theme-dark">
            <Navbar dockviewApi={dockviewApiRef} />
            <Component dockviewApi={dockviewApiRef} />
        </div>
    );
}
