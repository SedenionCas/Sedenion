import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    submit?: boolean;
};

function Button({ children, submit }: ButtonProps) {
    return (
        <button
            type={submit ? "submit" : "button"}
            className="rounded-primary bg-primary px-sm py-xs text-text-1 transition-colors duration-150 hover:bg-primary-dark hover:text-text-2"
        >
            {children}
        </button>
    );
}

export default Button;
