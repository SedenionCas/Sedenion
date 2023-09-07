import { useState } from "react";
import { evaluate } from "sedenion_engine";
import MathBlock from "@/components/MathBlock";
import CalcBlock from "./components/CalcBlock";
import Block from "@/components/Block";

function CalculatorPanel() {
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
