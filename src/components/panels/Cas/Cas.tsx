import { useState } from "react";
import CalcBlock from "./CalcBlock";
import { optimize } from "sedenion_engine";
import MathBlock from "../../MathBlock";
import ErrorBlock from "./ErrorBlock";
import WarningBlock from "./WarningBlock";

export default function Cas() {
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
                    solution={optimize(inputText)}
                />,
            ]);
            setErrorBlock(<></>);
        } catch (err: unknown) {
            console.error(err);
            setErrorBlock(<ErrorBlock content={err as string} />);
        }
    };

    return (
        <div className="overflow-y-auto">
            <div className="h-[calc(100vh-5rem)]">
                <WarningBlock>
                    <div className="markdown">
                        <h2>Warning</h2>
                        <p>
                            This feature is still in very early beta. There may
                            be incorrect answers. Please check if they are and
                            report them. Thank you! :)
                        </p>
                    </div>
                </WarningBlock>
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