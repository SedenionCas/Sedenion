import { useState } from "react";

type SwitchProps = {
    enabled: boolean;
    onClick: () => void;
};

function Switch({ enabled, onClick }: SwitchProps) {
    const [checked, setChecked] = useState(enabled);
    return (
        <label className="relative mr-5 inline-flex cursor-pointer items-center">
            <input
                type="checkbox"
                className="peer sr-only"
                checked={checked}
                readOnly
            />
            <div
                onClick={() => {
                    setChecked((last) => !last);
                    onClick();
                }}
                className="peer h-6 w-11 rounded-full bg-border  after:absolute  after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-border after:bg-text-1 after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-text-2 peer-focus:ring-primary-dark"
            ></div>
        </label>
    );
}

export default Switch;
