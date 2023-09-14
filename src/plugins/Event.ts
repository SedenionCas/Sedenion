import { Event } from "react-pluggable";

class PluginEvent extends Event {
    data: string;

    constructor(name: string, data: string) {
        super(name);

        this.data = data;
    }

    getData(): string {
        return this.data;
    }
}

export default PluginEvent;
