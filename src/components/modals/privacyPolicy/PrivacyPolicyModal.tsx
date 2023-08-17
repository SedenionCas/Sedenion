import React, { Suspense, useState, type FormEvent } from "react";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";

type PrivacyPolicyModalProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PrivacyPolicyModal({
    setShowModal,
}: PrivacyPolicyModalProps) {
    const [viewPolicy, setViewPolicy] = useState(false);
    const LazyPrivacy = React.lazy(() => import("./views/PrivacyPolicy"));

    if (localStorage.getItem("accepted") === "true") {
        setShowModal(false);
        return <></>;
    }

    const displayPolicy = () => {
        setViewPolicy(true);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // @ts-expect-error ts(2488)
        const [policy] = e.target;

        if (policy.checked) {
            localStorage.setItem("accepted", "true");
            setShowModal(false);
        }
    };

    return (
        <article className="markdown overflow-y-auto px-12">
            <h1>Important notice!</h1>
            <p>
                To continue using this app please read and accept our{" "}
                <span
                    onClick={displayPolicy}
                    className="cursor-pointer text-blue-400 underline"
                >
                    privacy policy
                </span>
                .
            </p>

            <form onSubmit={handleSubmit}>
                <Checkbox id="privacy" className="mb-4">
                    I confirm that I have read and agreed to the privacy policy,
                    and that I am at least 13 years of age or older.
                </Checkbox>
                <Button submit>Continue</Button>
            </form>

            {viewPolicy && (
                <div>
                    <Suspense>
                        <LazyPrivacy />
                    </Suspense>
                </div>
            )}
        </article>
    );
}
