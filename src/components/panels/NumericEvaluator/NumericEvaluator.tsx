import React, { useState } from "react";
import CalcBlock from "./CalcBlock";
import { evaluate } from "sedenion_engine";
import MathBlock from "../../MathBlock";

export default function NumericEvaluator() {
    const [calcBlocks, setCalcBlocks] = useState<JSX.Element[]>([]);
    const [inputLatex, setInputLatex] = useState("");
    const [inputText, setInputText] = useState("");

    const handleCalculation = () => {
        setCalcBlocks([
            ...calcBlocks,
            <CalcBlock
                expression={inputLatex}
                solution={evaluate(inputText)}
            />,
        ]);
    };

    return (
        <div className="overflow-y-auto">
            <div className="h-[calc(100vh-5rem)]">
                {...calcBlocks}

                <div className="mt-5 flex w-full justify-center">
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
