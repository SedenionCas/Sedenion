import React, { useState } from "react";
import CalcBlock from "./CalcBlock";
import { evaluate } from "solvurus_engine";
import styles from "./NumericEvaluator.module.css";

export default function NumericEvaluator() {
    const [calcBlocks, setCalcBlocks] = useState<JSX.Element[]>([]);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target: any = event.target;
        const value = target.expressionField.value;
        setCalcBlocks([
            ...calcBlocks,
            <CalcBlock expression={value} solution={evaluate(value)} />,
        ]);
    };

    return (
        <div>
            <div id={styles.panelContainer}>{...calcBlocks}</div>
            <form onSubmit={handleSubmit}>
                <input
                    id={"expressionField"}
                    className={styles.expressionField}
                />
            </form>
        </div>
    );
}
