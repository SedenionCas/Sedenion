import React from "react";

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
    return (
        <div
            className="group relative my-2 flex h-12 w-12 items-center justify-center rounded-md bg-truegray-700 text-blue-600  shadow-md transition-all duration-150 ease-linear hover:cursor-pointer hover:rounded-xl hover:text-truegray-50"
            onClick={onClick}
        >
            {icon}
            <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-truegray-700 p-2 text-truegray-50 shadow-md transition-all duration-150 ease-linear group-hover:scale-100">
                {title}
            </span>
        </div>
    );
}
