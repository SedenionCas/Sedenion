import NumericEvaluator from "./panels/NumericEvaluator";

export default function PanelBuilder() {
  return {
  basicCalc: () => {
    return <NumericEvaluator/>;
  },
};
}