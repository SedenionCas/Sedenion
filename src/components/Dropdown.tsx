import { useState } from "react";

type DropdownProps = {
    options: string[];
    value: string;
    onChange: (value: string) => void;
};

function Dropdown({ options, value, onChange }: DropdownProps) {
    const [content, setContent] = useState(value);
    const optionsComponents = options.map((option) => (
        <option value={option}>{option}</option>
    ));

    return (
        <select
            value={content} 
            onChange={(e) => {
                onChange(e.target.value);
                setContent(e.target.value);
            }}
            className="rounded-md border border-truegray-400 bg-truegray-700 px-1 py-0.5 text-truegray-100 shadow-none ring-0 focus:border-2 focus:border-blue-500 focus:shadow-none focus:outline-none focus:ring-0"
        >
            {optionsComponents}
        </select>
    );
}

export default Dropdown;
