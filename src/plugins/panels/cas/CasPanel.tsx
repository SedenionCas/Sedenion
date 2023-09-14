import MathBlock from "@/components/MathBlock";
import { useEffect, useRef, useState } from "react";
import { optimize_equation, optimize } from "sedenion_engine";
import CalcBlock from "./components/CalcBlock";
import Block from "@/components/Block";
import PluginEvent from "@/plugins/Event";

import type CasPlugin from "./CasPlugin";
import type { SaveState } from "@/plugins/SaveManager";

type CasPluginProps = {
    plugin: CasPlugin;
};

export default function CasPanel({ plugin }: CasPluginProps) {
    const index = useRef(plugin.getIndex() - 1);
    const [calcBlocks, setCalcBlocks] = useState<JSX.Element[]>([]);
    const [errorBlock, setErrorBlock] = useState<JSX.Element>(<></>);
    const [inputLatex, setInputLatex] = useState("");
    const [inputText, setInputText] = useState("");

    const handleCalculation = () => {
        try {
            if (inputText.includes("=")) {
                setCalcBlocks([
                    ...calcBlocks,
                    <CalcBlock
                        expression={inputLatex}
                        solution={optimize_equation(inputText, "X")}
                    />,
                ]);
            } else {
                setCalcBlocks([
                    ...calcBlocks,
                    <CalcBlock
                        expression={inputLatex}
                        solution={optimize(inputText)}
                    />,
                ]);
            }
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
        const data: SaveState = {
            from: `${plugin.getPluginName()};${index.current}`,
            kind: "PANEL",
            data: {
                calcBlocks: JSON.stringify(
                    calcBlocks.map((block) => block.props)
                ),
                errorBlock: JSON.stringify(errorBlock.props),
            },
        };

        plugin.pluginStore.dispatchEvent(
            new PluginEvent("Save.request_save", JSON.stringify(data))
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calcBlocks, errorBlock]);

    return (
        <div className="overflow-y-auto">
            <div className="h-[calc(100vh-5rem)]">
                <Block
                    variant="warning"
                    className="markdown w-[calc(100%-2*1.25rem)]"
                >
                    <h2>Warning</h2>
                    <p>
                        This feature is still in very early beta. There may be
                        incorrect answers. Please check if they are and report
                        them. Thank you! :)
                    </p>
                </Block>
                {...calcBlocks}

                <div className="mt-5 flex w-full flex-col items-center">
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
