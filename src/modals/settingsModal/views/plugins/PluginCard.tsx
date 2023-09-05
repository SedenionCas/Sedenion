import Switch from "@/components/Switch";

type PluginCardProps = {
    name: string;
    author: string;
    authorUrl: string;
    version: string;
    enabled: boolean;
    onClick: (name: string) => void;
};

function PluginCard({ name, author, authorUrl , version, enabled, onClick }: PluginCardProps) {
    return (
        <div className="border border-truegray-400 rounded-md p-4 w-52">
            <h1 className="text-truegray-50">{name}</h1>
            <div className="flex gap-2 text-truegray-300">
                <p>{version}</p>
                <a href={authorUrl} className="hover:underline">{author}</a>
            </div>
            <div className="flex gap-8 mt-2 text-truegray-50">
                <p>Enabled</p>
                <Switch enabled={enabled} onClick={() => {onClick(name)}} />
            </div>
        </div>
    );
}

export default PluginCard;
