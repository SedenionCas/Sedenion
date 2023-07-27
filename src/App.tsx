import type { DockviewReadyEvent, DockviewApi } from "dockview";
import { DockviewReact } from "dockview";
import PanelBuilder from "./components/panels/PanelBuilder";
import Navbar from "./components/navbar/Navbar";
import type { MutableRefObject } from "react";
import { useRef } from "react";

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
        <div className="dockview-theme-dark ml-16">
            <Navbar dockviewApi={dockviewApiRef} />
            <Component dockviewApi={dockviewApiRef} />
        </div>
    );
}
