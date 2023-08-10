import { EditableMathField, addStyles } from "react-mathquill";

addStyles();

interface MathBlockProps {
    latex: string;
    setLatex: React.Dispatch<React.SetStateAction<string>>;
    setText: React.Dispatch<React.SetStateAction<string>>;
    evaluate: () => void;
}


export default function MathBlock({
    latex,
    setLatex,
    setText,
    evaluate,
}: MathBlockProps) {
    return (
        <EditableMathField
            latex={latex}
            onChange={(mathField) => {
                setLatex(mathField.latex());
                setText(mathField.text());
            }}
            onKeyDown={(event) => {
                if (event.key === "Enter") {
                    evaluate();
                }
            }}
        />
    );
}
