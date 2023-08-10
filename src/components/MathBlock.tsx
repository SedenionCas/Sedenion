import { useState } from "react";
import { EditableMathField, addStyles } from "react-mathquill";

addStyles();

export default function MathBlock() {
    const [latex, setLatex] = useState("\\frac{1}{\\sqrt{2}}\\cdot 2");

    return (
        <div>
            <EditableMathField
                latex={latex}
                onChange={(mathField) => {
                    setLatex(mathField.latex());
                }}
            />
        </div>
    );
}

