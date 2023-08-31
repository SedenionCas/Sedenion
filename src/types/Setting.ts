export type SettingKind = string | number | boolean | string[];

export default interface SettingSection {
    name: string;
    settings: Setting<SettingKind>[];
}

export class Setting<T extends SettingKind> {
    name: string;
    description: string;
    dropdownSelected?: string;
    initialValue: T;

    private _value: T;

    constructor(name: string, description: string, initialValue: T, dropdownSelected?: string) {
        this.name = name;
        this.description = description;
        this.initialValue = initialValue;
        this._value = initialValue;
        this.dropdownSelected = dropdownSelected;
    }

    public get value(): T {
        return this._value;
    }
    
    public set value(value: T) {
        this._value = value;
    }
}
