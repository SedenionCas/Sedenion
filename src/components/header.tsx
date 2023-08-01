import { IconX } from "@tabler/icons-react";
import { type IDockviewDefaultTabProps } from "dockview";

export default function Header(props: IDockviewDefaultTabProps) {
    return (
        <div className="default-tab px-2">
            <div className="tab-content">{props.api.title}</div>
            <div
                onClick={() => props.api.close()}
                className="action-container h-5 w-5 items-center justify-center hover:cursor-pointer hover:text-truegray-200"
            >
                <IconX />
            </div>
        </div>
    );
}
