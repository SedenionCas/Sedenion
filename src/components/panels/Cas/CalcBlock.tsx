import { StaticMathField } from "react-mathquill";

interface CompletedProps {
    expression: string;
    solution: string;
}

export default function CalcBlock({ expression, solution }: CompletedProps) {
    return (
        <div className="m-5 my-2 w-[calc(100%-2*1.25rem)] overflow-x-auto rounded-sm bg-truegray-600 p-3 first:mt-5 first:rounded-t-md last:mb-[calc(100vh-14.25rem)]">
            <StaticMathField className="mb-1">{expression}</StaticMathField>
            <StaticMathField>{solution}</StaticMathField>
        </div>
    );
}
