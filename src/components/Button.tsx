import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    submit?: boolean;
};

function Button({ children, submit }: ButtonProps) {
    return (
        <button
            type={submit ? "submit" : "button"}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-800"
        >
            {children}
        </button>
    );
}

export default Button;
