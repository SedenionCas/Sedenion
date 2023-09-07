import { getAppState } from "@/store";
import type { Icon } from "@tabler/icons-react";

interface IWatermarkButtonProps {
    title: string;
    icon: Icon;
    onClick?: () => void;
}

export default function WatermarkButton({
    icon: Icon,
    title,
    onClick,
}: IWatermarkButtonProps) {
    const handleClick = () => {
        const { trackEvent } = getAppState();

        trackEvent(title, {
            props: {
                variation: "Watermark",
            },
        });

        onClick ? onClick() : null;
    };

    return (
        <button
            onClick={handleClick}
            className="m-3 flex h-24 w-24 flex-col items-center justify-center rounded-primary bg-surface-1 text-text-1 shadow-md transition-all duration-150 ease-linear hover:cursor-pointer hover:rounded-xl hover:bg-surface-2 hover:text-text-2"
        >
            <Icon className="h-10 w-10 text-primary" />
            <p>{title}</p>
        </button>
    );
}
