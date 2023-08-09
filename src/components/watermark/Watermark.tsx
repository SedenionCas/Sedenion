import { IconCalculator, IconPencilBolt, IconSquare } from "@tabler/icons-react";
import WatermarkButton from "./WatermarkButton";
import "./watermark.css";
import Logo from "../Logo";
import { getAppState, setAppState } from "../../store";
import type { IWatermarkPanelProps } from "dockview";

export default function Watermark({ containerApi }: IWatermarkPanelProps) {
    const spawnCalculator = () => {
        const state = getAppState();
        containerApi.addPanel({
            id: "Calculator " + state.calculatorIndex,
            component: "basicCalc",
        });

        state.calculatorIndex++;
        setAppState(state);
    };

    const spawnExcalidraw = () => {
        const state = getAppState();
        containerApi.addPanel({
            id: "Excalidraw " + state.excalidrawIndex,
            component: "excalidraw",
        });

        state.excalidrawIndex++;
        setAppState(state);
    };

    return (
        <div
            id="watermark"
            className="flex h-full w-full items-center justify-center"
        >
            <div className="watermark mx-24 grid grid-cols-4 grid-rows-3">
                <div className="col-span-3 col-start-1 row-span-3 m-3 rounded-md bg-truegray-600 p-10">
                    <div className="flex items-center">
                        <Logo />
                        <h1 className="-ml-3 select-none text-5xl tracking-tight text-truegray-50">
                            edenion
                        </h1>
                    </div>
                </div>

                <div className="col-start-4 row-span-3 row-start-1 grid h-fit w-fit grid-cols-2">
                    <WatermarkButton
                        onClick={spawnCalculator}
                        title="Calculator"
                        icon={IconCalculator}
                    />
                    <WatermarkButton title="-" icon={IconSquare} />
                    <WatermarkButton onClick={spawnExcalidraw} title="Excalidraw" icon={IconPencilBolt} />
                    <WatermarkButton title="-" icon={IconSquare} />
                    <WatermarkButton title="-" icon={IconSquare} />
                    <WatermarkButton title="-" icon={IconSquare} />
                </div>
            </div>
        </div>
    );
}
