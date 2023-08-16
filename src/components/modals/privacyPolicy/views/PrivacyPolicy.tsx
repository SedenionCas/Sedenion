import ReactMarkdown from "react-markdown";
import { useState } from "react";

export const PRIVACY_POLICY_VERSION = 1;

export default function PrivacyPolicy() {
    const [policy, setPolicy] = useState("*Loading privacy policy...*");

    // @ts-expect-error ts(2307)
    import("../content/PrivacyPolicy.en.md").then((res) => {
        fetch(res.default)
            .then((response) => response.text())
            .then((text) => setPolicy(text))
            /// Failed to load privacy policy:
            /// <codeblock of the error>
            .catch((err) => setPolicy(`Failed to load privacy policy:\n\`\`\`\n${err}\n\`\`\``))
    });

    return <ReactMarkdown className="">{policy}</ReactMarkdown>;
}
