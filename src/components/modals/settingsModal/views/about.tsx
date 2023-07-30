// @ts-expect-error ts(2307)
import packageJson from "/package.json";

    return (
        <div className="text-truegray-100">
            <h1 className="text-3xl">Sedenion</h1>

            <p className="-mt1 text-truegray-400">
                Version: {packageJson.version} • Engine:{" "}
                {packageJson.dependencies.sedenion_engine}
            </p>
        </div>
    );
}
