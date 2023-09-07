import { DockviewReact } from "dockview";
import Navbar from "./components/navbar/Navbar";
import { useRef, useState } from "react";
import Watermark from "./watermark/Watermark";
import Modal from "./modals/modal";
import SettingsModal from "./modals/settingsModal/settingsModal";
import { getAppState, setAppState } from "./store";
import PrivacyPolicyModal from "./modals/privacyPolicy/PrivacyPolicyModal";
import PanelBuilder from "./plugins/PanelBuilder";

import type { MutableRefObject } from "react";
import type { DockviewReadyEvent, DockviewApi } from "dockview";
import TabHeader from "./components/TabHeader";

interface IComponentProps {
    dockviewApi: MutableRefObject<DockviewApi | null>;
}

const Component = ({ dockviewApi }: IComponentProps) => {
    const onReady = (event: DockviewReadyEvent) => {
        const state = getAppState();
        dockviewApi.current = event.api;
        state.api = event.api;
        setAppState(state);
    };

    const tabComponents = {
        default: TabHeader,
    };

    return (
        <DockviewReact
            components={PanelBuilder()}
            tabComponents={tabComponents}
            onReady={onReady}
            watermarkComponent={Watermark}
        />
    );
};

export default function App() {
    const dockviewApiRef = useRef<DockviewApi | null>(null);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [showPrivacyModal, setShowPrivacyModal] = useState(true);

    return (
        <div className="dockview-theme-dark ml-16">
            <Modal
                showModal={showSettingsModal}
                setShowModal={setShowSettingsModal}
            >
                <SettingsModal />
            </Modal>
            <Modal
                showModal={showPrivacyModal}
                setShowModal={setShowPrivacyModal}
                noClose
            >
                <PrivacyPolicyModal setShowModal={setShowPrivacyModal} />
            </Modal>
            <Navbar
                dockviewApi={dockviewApiRef}
                setShowSettingsModal={setShowSettingsModal}
            />
            <Component dockviewApi={dockviewApiRef} />
        </div>
    );
}
