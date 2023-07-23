import { DockviewReadyEvent, DockviewReact } from "dockview"
import PanelBuilder from "./components/PanelBuilder";

const Component = () => {
  const onReady = (event: DockviewReadyEvent) => {
    event.api.addPanel({
      id: 'panel1',
      component: 'basicCalc',
      params: {
        someProps: 'Hello',
      },
    });
    event.api.addPanel({
      id: 'panel2',
      component: 'basicCalc',
      params: {
        someProps: 'Hello',
      },
    });
  };

  return (
    <DockviewReact
      components={PanelBuilder()}
      tabComponents={{}}
      onReady={onReady}
    />
  );
};

export default function App() {

  return (
    <div className="dockview-theme-dark">
      <Component />
    </div>
  );
}
