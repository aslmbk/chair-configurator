import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { CustomizationProvider } from "./contexts/Customization";
import { Configurator } from "./components/Configurator";
import "./App.css";

export const App: React.FC = () => {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
};
