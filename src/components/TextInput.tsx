import { useState } from "react";

type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
};

function TextInput({ value, onChange }: TextInputProps) {
    const [content, setContent] = useState(value);

    return (
        <input
            onChange={(e) => {
                onChange(e.target.value);
                setContent(e.target.value);
            }}
            type="text"
            value={content}
            className="appearance-none rounded-md border border-truegray-400 bg-truegray-700 px-1 py-0.5 text-truegray-100 shadow-none ring-0 focus:border-2 focus:border-blue-500 focus:shadow-none focus:outline-none focus:ring-0"
        />
    );
}

export default TextInput;
