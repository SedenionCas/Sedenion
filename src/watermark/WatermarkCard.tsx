import type { ReactNode } from "react";

type WatermarkCardProps = {
    title: string;
    children: ReactNode;
};

function WatermarkCard({ title, children }: WatermarkCardProps) {
    return (
        <div className="markdown col-span-1 h-72 overflow-x-clip rounded-primary border border-border bg-surface-2 pl-3 shadow-lg">
            <div className="h-full overflow-y-auto pr-2">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    );
}

export default WatermarkCard;
