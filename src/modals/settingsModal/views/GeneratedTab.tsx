import Dropdown from "@/components/Dropdown";
import NumberInput from "@/components/NumberInput";
import Switch from "@/components/Switch";
import TextInput from "@/components/TextInput";

import type { SettingSection } from "sedenion-plugin-types";

type GeneratedTabProps = {
    settingsSections: SettingSection[];
};

function GeneratedTab({ settingsSections }: GeneratedTabProps) {
    const settingsComponents = settingsSections.map((settingsSection) => {
        const sections = settingsSection.settings.map((setting) => {
            let input;
            if (typeof setting.value == "boolean") {
                input = (
                    <Switch
                        key={setting.name}
                        enabled={setting.value}
                        onClick={() => (setting.value = !setting.value)}
                    />
                );
            } else if (typeof setting.value == "string") {
                console.log(setting.value);
                input = (
                    <TextInput
                        key={setting.name}
                        value={setting.value}
                        onChange={(value) => (setting.value = value)}
                    />
                );
            } else if (typeof setting.value == "number") {
                input = (
                    <NumberInput
                        key={setting.name}
                        value={setting.value}
                        onChange={(value) => (setting.value = value)}
                    />
                );
            } else if (Array.isArray(setting.value)) {
                input = (
                    <Dropdown
                        key={setting.name}
                        value={setting.dropdownSelected || setting.value[0]}
                        options={setting.value}
                        onChange={(value) => (setting.dropdownSelected = value)}
                    />
                );
            }

            return (
                <div className="mb-4 flex flex-grow items-center justify-between border-y border-truegray-400 py-1">
                    <div className="">
                        <p className="font-bold text-truegray-50">
                            {setting.name}
                        </p>
                        <p className="text-truegray-200">
                            {setting.description}
                        </p>
                    </div>
                    <div>{input}</div>
                </div>
            );
        });

        return (
            <div className="mb-4">
                <p className="font-bold text-truegray-50 text-xl">
                    {settingsSection.name}
                </p>
                <div className="p-2">
                    {sections}
                </div>
            </div>
        );
    });

    return <>{settingsComponents}</>;
}

export default GeneratedTab;
