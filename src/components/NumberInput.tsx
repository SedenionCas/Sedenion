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
            className="number-input appearance-none rounded-md border border-truegray-400 bg-truegray-700 px-1 py-0.5 text-truegray-100 shadow-none ring-0 focus:border-2 focus:border-blue-500 focus:shadow-none focus:outline-none focus:ring-0"
        />
    );
}

export default NumberInput;
