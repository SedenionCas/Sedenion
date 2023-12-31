import cn from "@/util/cn";
import type { ReactNode } from "react";

type BlockProps = {
    children: ReactNode;
    className?: string;
    variant: "error" | "warning" | "success" | "info";
};

const variants = {
    error: "bg-error border-error",
    warning: "bg-warning border-warning",
    success: "bg-success border-success",
    info: "bg-info border-info",
};

function Block({ children, variant, className }: BlockProps) {
    return (
        <div
            className={cn(
                "m-5 my-2 w-full rounded-primary border bg-opacity-0 p-3 text-text-1 text-opacity-100",
                variants[variant],
                className
            )}
        >
            {children}
        </div>
    );
}

export default Block;
