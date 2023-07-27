import React from "react";
import styles from "./NavbarButton.module.css";

interface INavbarButtonProps {
    title: String;
    icon: React.JSX.Element;
    onClick: () => void;
}

export default function NavbarButton({
    title,
    icon,
    onClick,
}: INavbarButtonProps) {
    return (
        <div id={styles.iconButton} onClick={onClick}>
            {icon}
            <span id={styles.tooltip}>{title}</span>
        </div>
    );
}
