import Dropdown from "@/components/Dropdown";
import { applyTheme, themes } from "@/themes/ThemeLoader";

function Appearance() {
    const themeOptions = Object.keys(themes);
    const active = localStorage.getItem("theme") || "base";

    return (
        <div className="mb-4 flex flex-grow items-center justify-between border-y border-border py-1">
            <div className="">
                <p className="font-bold text-text-1">Theme</p>
                <p className="text-text-2">Select the theme you want to use.</p>
            </div>
            <div>
                <Dropdown options={themeOptions} value={active} onChange={(theme) => {applyTheme(theme)}}/>
            </div>
        </div>
    );
}

export default Appearance;
