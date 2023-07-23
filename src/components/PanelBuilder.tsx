import { IDockviewPanelProps } from "dockview";
import NumericEvaluator from "./panels/NumericEvaluator";

export default function PanelBuilder() {
  return {
  basicCalc: (props: IDockviewPanelProps<{ someProps: string }>) => {
    return <NumericEvaluator/>;
  },
};
}