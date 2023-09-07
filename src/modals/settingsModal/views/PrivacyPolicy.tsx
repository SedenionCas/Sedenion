import React from "react";
import { Suspense } from "react";

function PrivacyPolicy() {
    const LazyPrivacy = React.lazy(
        () => import("@/modals/privacyPolicy/views/PrivacyPolicy")
    );
    return (
        <div className="markdown">
            <Suspense>
                <LazyPrivacy />
            </Suspense>
        </div>
    );
}

export default PrivacyPolicy;
