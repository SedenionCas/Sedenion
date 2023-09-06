import { IconX } from "@tabler/icons-react";
import { type ReactElement } from "react";

interface CloseButtonProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactElement;

    noClose?: boolean;
}

function CloseButton({ setShowModal }: CloseButtonProps) {
    return (
        <div
            onClick={() => setShowModal(false)}
            className="relative cursor-pointer"
        >
            <IconX className="absolute right-2 top-2 text-text-2" />
        </div>
    );
}

export default function Modal({
    children,
    showModal,
    setShowModal,
    noClose,
}: ModalProps) {
    return (
        <>
            {showModal ? (
                <div
                    onClick={() => noClose || setShowModal(false)}
                    className="absolute left-0 right-0 z-40 m-auto flex h-screen w-screen items-center justify-center bg-black bg-opacity-75"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-3/4 w-3/4 flex-col rounded-primary border border-border bg-surface-1"
                    >
                        {noClose || <CloseButton setShowModal={setShowModal} />}
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
}
