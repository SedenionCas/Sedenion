// @ts-expect-error ts(2307)
import packageJson from "/package.json";
// @ts-expect-error ts(2307)
import licenses from "/licenses.json";

export interface License {
    name: string;
    licenses: string;
    repository: string;
    licenseUrl: string;
}

export default function About() {
    const credits: License[] = Object.entries(licenses).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ([name, body]: [string, any]) => ({
            name: name,
            licenses: body.licenses,
            repository: body.repository,
            licenseUrl: body.licenseUrl,
        })
    );

    const creditsList = credits.map((credit) => (
        <li key={"credit " + credit.name}>
            <a className="underline" href={credit.repository}>
                {credit.name}
            </a>{" "}
            •{" "}
            <a className="underline" href={credit.licenseUrl}>
                {credit.licenses}
            </a>
        </li>
    ));

    return (
        <div className="text-text-1">
            <h1 className="text-3xl">Sedenion</h1>

            <p className="-mt1 text-text-2">
                Version: {packageJson.version} • Engine:{" "}
                {packageJson.dependencies.sedenion_engine}
            </p>
            <hr className="-mx-1 my-4 border-border" />
            <h2 className="text-2xl">Open source libraries used</h2>
            <ul className="ml-6 mt-2 list-disc">{creditsList}</ul>
        </div>
    );
}
