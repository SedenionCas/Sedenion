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
                className="peer h-6 w-11 rounded-full bg-truegray-400  after:absolute  after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
            ></div>
        </label>
    );
}

export default Switch;
