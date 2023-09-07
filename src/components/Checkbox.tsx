import React, { type ReactNode } from "react";

type CheckboxProps = {
    children: ReactNode;
    id: string;

    name?: string;
    className?: string;
    checkRef?: React.RefObject<HTMLInputElement>;
};

function Checkbox({ children, id, name, className, checkRef }: CheckboxProps) {
    return (
        <div className={className}>
            <input
                ref={checkRef}
                className="mr-3"
                type="checkbox"
                name={name || id}
                id={id}
            />
            <label className="" htmlFor={id}>
                {children}
            </label>
        </div>
    );
}

export default Checkbox;
