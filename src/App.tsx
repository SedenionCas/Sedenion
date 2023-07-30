import type { DockviewReadyEvent, DockviewApi } from "dockview";
import { DockviewReact } from "dockview";
import PanelBuilder from "./components/panels/PanelBuilder";
import Navbar from "./components/navbar/Navbar";
import type { MutableRefObject } from "react";
import { useRef, useState } from "react";
import Watermark from "./components/watermark/Watermark";
import Modal from "./components/modals/modal";
import SettingsModal from "./components/modals/settingsModal/settingsModal";

interface IComponentProps {
    dockviewApi: MutableRefObject<DockviewApi | null>;
}

const Component = ({ dockviewApi }: IComponentProps) => {
    const onReady = (event: DockviewReadyEvent) => {
        dockviewApi.current = event.api;
    };

    return (
        <DockviewReact
            components={PanelBuilder()}
            tabComponents={{}}
            onReady={onReady}
            watermarkComponent={Watermark}
        />
    );
};

export default function App() {
    const dockviewApiRef = useRef<DockviewApi | null>(null);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    return (
        <div className="dockview-theme-dark ml-16">
            <Modal
                showModal={showSettingsModal}
                setShowModal={setShowSettingsModal}
            >
                <SettingsModal />
            </Modal>
            <Navbar
                dockviewApi={dockviewApiRef}
                setShowSettingsModal={setShowSettingsModal}
            />
            <Component dockviewApi={dockviewApiRef} />
        </div>
    );
}
