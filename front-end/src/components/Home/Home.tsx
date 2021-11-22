import "./Home.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "components/Sphere";

const Home = () => {
  return (
    <section className="home">
      <img
        className="hand-image"
        src={"/hands-grabbing.png"}
        alt="hands-grabbing-orb"
      />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {
          //@ts-ignore
          <Sphere position={[-1.2, 0, 0]} />
        }
      </Canvas>
    </section>
  );
};

export default Home;
