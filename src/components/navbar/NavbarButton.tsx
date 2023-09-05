import React from "react";
import { getAppState } from "../../store";

interface INavbarButtonProps {
    title: string;
    icon: React.JSX.Element;
    onClick: () => void;
}

export default function NavbarButton({
    title,
    icon,
    onClick,
}: INavbarButtonProps) {
    const handleClick = () => {
        const { trackEvent } = getAppState();

        trackEvent(title, {
            props: {
                variation: "Navbar",
            },
        });

        onClick();
    };

    return (
        <div
            className="group relative my-2 flex h-12 w-12 items-center justify-center rounded-primary bg-surface-2 text-primary shadow-md transition-all duration-150 ease-linear hover:cursor-pointer hover:rounded-xl hover:text-text-1"
            onClick={handleClick}
        >
            {icon}
            <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-primary bg-surface-2 p-2 text-text-1 shadow-md transition-all duration-150 ease-linear group-hover:scale-100">
                {title}
            </span>
        </div>
    );
}
