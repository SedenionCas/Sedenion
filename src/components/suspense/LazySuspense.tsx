import { Suspense } from "react";
import Loading from "./Loading";

type LazySuspenseProps = {
    children: JSX.Element;
};

export default function LazySuspense(props: LazySuspenseProps) {
    return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
}
