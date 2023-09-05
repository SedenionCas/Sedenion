import { getAppState } from "@/store";
import { IconFileUnknown, IconX } from "@tabler/icons-react";

import type { IDockviewPanelHeaderProps } from "dockview";

function TabHeader(props: IDockviewPanelHeaderProps) {
    const name = props.api.title?.split(" ")[0];
    const Icon =
        getAppState().plugins.find((plugin) => plugin.name === name)?.plugin
            .icon || IconFileUnknown;

    return (
        <div className="default-tab px-2">
            <Icon className="icon mr-sm" />
            <div className="tab-content">{props.api.title}</div>
            <button
                onClick={() => props.api.close()}
                className="action-container h-5 w-5 items-center justify-center hover:cursor-pointer hover:text-text-2 hover:bg-surface-1 rounded-primary"
            >
                <IconX />
            </button>
        </div>
    );
}

export default TabHeader;
