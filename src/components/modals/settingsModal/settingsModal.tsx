import {
    useState,
    type ReactElement,
    type Dispatch,
    type SetStateAction,
} from "react";
import About from "./views/about";
import PrivacyPolicy from "./views/PrivacyPolicy";

interface View {
    name: string;
    component: ReactElement;
}

interface SettingViewButtonProps {
    name: string;
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
}

const VIEWS: View[] = [
    { name: "About", component: <About /> },
    { name: "Privacy policy", component: <PrivacyPolicy /> },
];

function SettingViewButton({
    name,
    active,
    setActive,
}: SettingViewButtonProps) {
    const activeClass = name == active ? "bg-blue-600 hover:bg-blue-500" : "";
    return (
        <div
            onClick={() => setActive(name)}
            className={
                "mb-0.5 flex items-center rounded-md px-2 py-0.5 text-sm font-bold text-truegray-100 hover:bg-truegray-500 " +
                activeClass
            }
        >
            <p>{name}</p>
        </div>
    );
}

export default function SettingsModal() {
    const [active, setActive] = useState("About");
    const viewComponent = VIEWS.find((view: View) => view.name == active)
        ?.component || <About />;
    const viewButtons = VIEWS.map((view: View) => (
        <SettingViewButton
            key={view.name}
            active={active}
            name={view.name}
            setActive={setActive}
        />
    ));

    return (
        <div className="flex h-full">
            <div className="h-full w-1/4 border-r border-truegray-400 p-3">
                {viewButtons}
            </div>
            <div className="overflow-x- h-full w-3/4 overflow-y-auto px-12 pt-8">
                {viewComponent}
            </div>
        </div>
    );
}
