import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { FPV } from "./components/FPV";
import { Player } from "./components/Player";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelect";
import { Terrain } from "./components/Terrain";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1.3} />
        <FPV />
        <Physics>
          <Terrain />
          <Ground />
          <Player />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;

/*

<>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1.3} />
        <FPV />
        <Physics>
          <Ground />
          <Player />
          <Cubes />
        </Physics>
      </Canvas>

      <TextureSelector />
      <div className="pointer">+</div>
    </>*/
