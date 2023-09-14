import { useEffect, useRef, useState } from "react";
import { evaluate } from "sedenion_engine";
import MathBlock from "@/components/MathBlock";
import CalcBlock from "./components/CalcBlock";
import Block from "@/components/Block";
import PluginEvent from "@/plugins/Event";

import type { SaveState } from "@/plugins/SaveManager";
import type CalculatorPlugin from "./CalculatorPlugin";
import SaveManager from "@/plugins/SaveManager";

type CalculatorPluginProps = {
    plugin: CalculatorPlugin;
};

function CalculatorPanel({ plugin }: CalculatorPluginProps) {
    const index = useRef(plugin.getIndex() - 1);
    const [calcBlocks, setCalcBlocks] = useState<JSX.Element[]>([]);
    const [errorBlock, setErrorBlock] = useState<JSX.Element>(<></>);
    const [inputLatex, setInputLatex] = useState("");
    const [inputText, setInputText] = useState("");

    const handleCalculation = () => {
        try {
            setCalcBlocks([
                ...calcBlocks,
                <CalcBlock
                    expression={inputLatex}
                    solution={evaluate(inputText)}
                />,
            ]);
            setErrorBlock(<></>);
        } catch (err: unknown) {
            console.error(err);
            setErrorBlock(
                <Block
                    variant="error"
                    className="w-[calc(100%-2*1.25rem)] whitespace-pre font-mono"
                >
                    {err as string}
                </Block>
            );
        }
    };

    useEffect(() => {
        const data = SaveManager.loadSaveState(
            `PANEL-${plugin.getPluginName()};${index.current}`
        );
        if (data?.calcBlocks) {
            setCalcBlocks(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.calcBlocks.map((props: any) => <CalcBlock {...props} />)
            );
        }
    }, []);

    useEffect(() => {
        if (calcBlocks.length == 0) return;

        const data: SaveState = {
            from: `${plugin.getPluginName()};${index.current}`,
            kind: "PANEL",
            data: {
                calcBlocks: calcBlocks.map((block) => block.props),
            },
        };

        plugin.pluginStore.dispatchEvent(
            new PluginEvent("Save.request_save", JSON.stringify(data))
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calcBlocks]);

    return (
        <div className="overflow-y-auto">
            <div className="h-[calc(100vh-5rem)]">
                {...calcBlocks}

                <div className="mt-5 flex flex-col items-center">
                    {errorBlock}
                    <MathBlock
                        latex={inputLatex}
                        setLatex={setInputLatex}
                        setText={setInputText}
                        evaluate={handleCalculation}
                    />
                </div>
            </div>
        </div>
    );
}

export default CalculatorPanel;
