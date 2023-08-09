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
        <div className="overflow-y-auto">
            <div className="h-[calc(100vh-10rem)]">{...calcBlocks}</div>
            <form onSubmit={handleSubmit}>
                <div className="absolute bottom-0 flex h-20 w-full items-center justify-center bg-gradient-to-t from-truegray-500 to-transparent ">
                    <input
                        id={"expressionField"}
                        className="h-10 w-[calc(100%-2*1.25rem)] rounded-md border border-truegray-400 px-3 bg-truegray-700 text-lg text-truegray-50 focus:outline-none"
                    />
                </div>
            </form>
        </div>
    );
}
