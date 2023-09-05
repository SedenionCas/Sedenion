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
            className="appearance-none rounded-primary border border-border bg-surface-2 px-1 py-0.5 text-text-1 shadow-none ring-0 focus:shadow-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
    );
}

export default TextInput;
