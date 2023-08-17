import { type IDockviewPanelProps } from "dockview";
import React, { type FunctionComponent } from "react";
import { useEffect, useState } from "react";

export default function RenderWhenVisible(
    children: FunctionComponent<IDockviewPanelProps>
) {
    const HigherOrderComponent = (props: IDockviewPanelProps) => {
        const [visible, setVisible] = useState<boolean>(props.api.isVisible);

        useEffect(() => {
            const disposable = props.api.onDidVisibilityChange((event) =>
                setVisible(event.isVisible)
            );

            return () => {
                disposable.dispose();
            };
        }, [props.api]);

        if (!visible) {
            return null;
        }

        return React.createElement(children, props);
    };
    return HigherOrderComponent;
}
