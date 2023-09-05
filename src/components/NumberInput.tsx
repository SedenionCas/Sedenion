import { useState } from "react";

type NumberInputProps = {
    value: number;
    onChange: (value: number) => void;
};

function NumberInput({ value, onChange }: NumberInputProps) {
    const [content, setContent] = useState(value);

    return (
        <input
            onChange={(e) => {
                if (e.target.value == "") return;
                onChange(Number.parseFloat(e.target.value));
                setContent(Number.parseFloat(e.target.value));
            }}
            value={content}
            type="number"
            className="number-input appearance-none rounded-primary border border-border bg-truegray-700 px-1 py-0.5 text-text-1 shadow-none ring-0 focus:shadow-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
    );
}

export default NumberInput;
