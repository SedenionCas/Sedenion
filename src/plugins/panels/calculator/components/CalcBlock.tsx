import { StaticMathField } from "react-mathquill";

interface CompletedProps {
    expression: string;
    solution: number;
}

export default function CalcBlock({ expression, solution }: CompletedProps) {
    return (
        <div className="m-5 my-2 w-[calc(100%-2*1.25rem)] overflow-x-auto rounded-sm bg-surface-1 p-3 first:mt-5 first:rounded-t-primary last:mb-[calc(100vh-14.25rem)] last:rounded-b-primary">
            <StaticMathField>{expression}</StaticMathField>
            <p className="mt-2 pl-1 text-lg text-text-1">{solution}</p>
        </div>
    );
}
