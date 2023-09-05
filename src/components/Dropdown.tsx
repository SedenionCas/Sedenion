import { useState } from "react";

type DropdownProps = {
    options: string[];
    value: string;
    onChange: (value: string) => void;
};

function Dropdown({ options, value, onChange }: DropdownProps) {
    const [content, setContent] = useState(value);
    const optionsComponents = options.map((option) => (
        <option className="appearance-none" value={option}>
            {option}
        </option>
    ));

    return (
        <select
            value={content}
            onChange={(e) => {
                onChange(e.target.value);
                setContent(e.target.value);
            }}
            className="rounded-primary border border-border bg-surface-2 px-xs py-0.5 text-text-1 shadow-none ring-0 focus:ring-2 focus:ring-primary"
        >
            {optionsComponents}
        </select>
    );
}

export default Dropdown;
