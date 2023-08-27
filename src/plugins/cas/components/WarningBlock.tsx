import type { ReactNode } from "react";

type ErrorBlockProps = {
    children: ReactNode;
};

function WarningBlock({ children }: ErrorBlockProps) {
    return (
        <div className="m-5 my-2 w-[calc(100%-2*1.25rem)] rounded-md border bg-yellow-600 border-yellow-600  bg-opacity-60 p-3 text-opacity-100">
            {children}
        </div>
    );
}

export default WarningBlock;
