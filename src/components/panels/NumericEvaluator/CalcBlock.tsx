interface CompletedProps {
    expression: string;
    solution: number;
}

export default function CalcBlock({ expression, solution }: CompletedProps) {
    return (
        <div className="m-5 w-[calc(100%-2*1.25rem)] overflow-x-auto bg-truegray-600 p-3">
            <p className="text-lg text-truegray-50">{expression}</p>
            <p className="text-lg text-truegray-50">{solution}</p>
        </div>
    );
}
