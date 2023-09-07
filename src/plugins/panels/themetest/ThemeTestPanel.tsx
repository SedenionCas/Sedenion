import Block from "@/components/Block";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Dropdown from "@/components/Dropdown";
import Logo from "@/components/Logo";
import NumberInput from "@/components/NumberInput";
import Switch from "@/components/Switch";
import TextInput from "@/components/TextInput";
import NavbarButton from "@/components/navbar/NavbarButton";
import { IconTestPipe } from "sedenion-plugin-types";

function ThemeTestPanel() {
    return (
        <div className="flex flex-wrap gap-10 p-10 text-text-1">
            <div>
                <Button>Button</Button>
            </div>
            <Block variant="error" className="w-fit">
                <h1 className="text-xl">Block - Error</h1>
                <h1 className="text-xl text-text-2">Block - Error</h1>
            </Block>
            <Block variant="warning" className="w-fit">
                <h1 className="text-xl">Block - Warning</h1>
                <h1 className="text-xl text-text-2">Block - Warning</h1>
            </Block>
            <Block variant="success" className="w-fit">
                <h1 className="text-xl">Block - Success</h1>
                <h1 className="text-xl text-text-2">Block - Success</h1>
            </Block>
            <Block variant="info" className="w-fit">
                <h1 className="text-xl">Block - Info</h1>
                <h1 className="text-xl text-text-2">Block - Info</h1>
            </Block>
            <Checkbox id="check">Check box</Checkbox>
            <div>
                <Dropdown
                    options={["Option 1", "Option 2", "Option 3"]}
                    value={"Option 1"}
                    onChange={() => {}}
                />
            </div>
            <Logo />
            <div>
                <NumberInput value={0} onChange={() => {}} />
            </div>
            <div>
                <Switch enabled={false} onClick={() => {}} />
            </div>
            <div>
                <TextInput value="Text Input" onChange={() => {}} />
            </div>
            <NavbarButton
                icon={<IconTestPipe />}
                title="Navbar Button"
                onClick={() => {}}
            />
            <div className="rounded-primary border border-border bg-surface-1 p-5">
                <h1>Surface 1</h1>
                <h1 className="text-text-2">Surface 1</h1>
            </div>
            <div className="rounded-primary border border-border bg-surface-2 p-5">
                <h1>Surface 2</h1>
                <h1 className="text-text-2">Surface 2</h1>
            </div>
            <div className="rounded-primary border border-border bg-surface-3 p-5">
                <h1>Surface 3</h1>
                <h1 className="text-text-2">Surface 3</h1>
            </div>
        </div>
    );
}

export default ThemeTestPanel;
