import React from "react";
import LazySuspense from "../suspense/LazySuspense";
import RenderWhenVisible from "@/util/RenderWhenVisible";

export default function PanelBuilder() {
    const LazyNumericEvaluator = React.lazy(
        () => import("./NumericEvaluator/NumericEvaluator")
    );
    const LazyExcalidraw = React.lazy(() => import("./Excalidraw/Excalidraw"));
    const LazyCas = React.lazy(() => import("./Cas/Cas"));

    return {
        basicCalc: () => (
            <LazySuspense>
                <LazyNumericEvaluator />
            </LazySuspense>
        ),
        cas: () => (
            <LazySuspense>
                <LazyCas />
            </LazySuspense>
        ),
        excalidraw: RenderWhenVisible(() => (
            <LazySuspense>
                <LazyExcalidraw />
            </LazySuspense>
        )),
    };
}
