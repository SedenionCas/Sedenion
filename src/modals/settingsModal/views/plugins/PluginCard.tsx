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
        <div className="border border-border rounded-primary p-4 w-52">
            <h1 className="text-text-1 font-bold text-lg">{name}</h1>
            <div className="flex gap-2 text-text-2">
                <p className="italic">{version}</p>
                <a href={authorUrl} className="hover:underline">{author}</a>
            </div>
            <div className="flex gap-8 mt-2 text-text-1">
                <p>Enabled</p>
                <Switch enabled={enabled} onClick={() => {onClick(name)}} />
            </div>
        </div>
    );
}

export default PluginCard;
