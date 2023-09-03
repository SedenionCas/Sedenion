import WatermarkButton from "./WatermarkButton";
import "./watermark.css";
import Logo from "../Logo";
import WatermarkCard from "./WatermarkCard";

import type { IWatermarkPanelProps } from "dockview";
import type { IPanelPlugin } from "sedenion-plugin-types";
import { PANEL_PLUGINS } from "@/plugins/manifest";

export default function Watermark({ containerApi }: IWatermarkPanelProps) {
    const spawn = (plugin: IPanelPlugin, name: string) => {
        const id = `${name} ${plugin.getIndex()}`;
        containerApi.addPanel({
            id,
            component: name,
        });
        plugin.incrementIndex();
    };

    const buttons = PANEL_PLUGINS.map((plugin, index) => {
        if (index > 8) return;

        return (
            <WatermarkButton
                key={plugin.name}
                icon={plugin.plugin.icon}
                title={plugin.name}
                onClick={() => {
                    spawn(plugin.plugin, plugin.name);
                }}
            />
        );
    });

    return (
        <div
            id="watermark"
            className="flex h-full w-full items-center justify-center"
        >
            <div className="watermark mx-24 grid grid-cols-4 grid-rows-4">
                <div className="col-span-1 col-start-4 row-span-1 m-3 mr-12 flex flex-row items-center justify-center rounded-md bg-truegray-600">
                    <Logo />
                    <h1 className="-ml-3 select-none text-5xl tracking-tight text-truegray-50">
                        edenion
                    </h1>
                </div>

                <div className="col-span-3 col-start-1 row-span-4 row-start-1 m-3 rounded-md bg-truegray-600 px-12 pt-8">
                    <h1 className="select-none text-5xl tracking-tight text-truegray-50">
                        News
                    </h1>
                    <div className="mt-6 grid grid-cols-2 gap-6">
                        <WatermarkCard title="Try our beta">
                            <p>
                                We are pleased to announce the commencement of
                                beta testing for our forthcoming platform. This
                                initiative marks a significant milestone in our
                                development process, allowing a select group of
                                users to explore and evaluate the site's
                                features, functionality, and user experience
                                before anyone else. Please note that all the
                                answers may not be correct in the beta version.
                                Feedback gathered during this phase will be
                                invaluable in refining our product for a
                                seamless and impactful launch.{" "}
                                <a href="https://beta.sedenion.net">
                                    Try the beta!
                                </a>
                            </p>
                        </WatermarkCard>
                        <WatermarkCard title="Read the docs">
                            <p>
                                We have written comprehensive documentation for
                                our calculator application, designed to provide
                                users with clear guidance on its
                                functionalities. This documentation serves as a
                                vital resource to assist users in harnessing the
                                full capabilities of the calculator, offering
                                step-by-step instructions for various
                                operations. Whether performing basic arithmetic
                                or utilizing advanced features, this
                                documentation aims to empower users with the
                                knowledge needed to maximize their experience
                                with the calculator application.{" "}
                                <a href="https://docs.sedenion.net">
                                    Read the docs!
                                </a>
                            </p>
                        </WatermarkCard>
                    </div>
                </div>

                <div className="col-start-4 row-span-3 row-start-2 grid h-fit w-fit grid-cols-2">
                    {buttons}
                </div>
            </div>
        </div>
    );
}
