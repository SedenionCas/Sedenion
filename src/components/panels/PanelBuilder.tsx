import NumericEvaluator from "./NumericEvaluator/NumericEvaluator";

export default function PanelBuilder() {
    return {
        basicCalc: () => <NumericEvaluator />,
    };
}
