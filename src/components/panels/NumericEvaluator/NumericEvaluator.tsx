import React, { useState } from "react";
import CalcBlock from "./CalcBlock";
import { evaluate } from "sedenion_engine";

export default function NumericEvaluator() {
    const [calcBlocks, setCalcBlocks] = useState<JSX.Element[]>([]);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const target: any = event.target;
        const value = target.expressionField.value;
        setCalcBlocks([
            ...calcBlocks,
            <CalcBlock expression={value} solution={evaluate(value)} />,
        ]);
    };

    return (
        <div>
            <div className="overflow-y-scroll max-h-[calc(100vh-7rem)] border-red-500">{...calcBlocks}</div>
            <form onSubmit={handleSubmit}>
                <input
                    id={"expressionField"}
                    className="absolute bottom-4 m-5 mr-10 h-10 w-[calc(100%-2*1.25rem)] border-none bg-truegray-700 px-2 text-lg text-truegray-50 focus:outline-none"
                />
            </form>
        </div>
    );
}
