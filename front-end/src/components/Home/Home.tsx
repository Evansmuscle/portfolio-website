import "./Home.css";
import React from "react";
import { Canvas, RootState } from "@react-three/fiber";
import Sphere from "components/Sphere";
import SetThreeState from "hooks/useThreeState";

const Home = () => {
  const stateChange = (state: RootState) => {
    state.gl.setSize(window.innerWidth, window.innerHeight);
  };

  return (
    <section className="home">
      <div className="mesh-position-wrapper">
        <div className="mesh-rotation-wrapper">
          <Canvas>
            <SetThreeState stateChange={stateChange} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {
              //@ts-ignore
              <Sphere position={[0, 0, 0]} />
            }
          </Canvas>
        </div>
      </div>
      <div className="home-slogan">
        <header className="home-slogan-header">
          Creative Designs, Efficient Code
        </header>
        <header className="home-slogan-header">
          Less Problems, More Solutions.
        </header>
        <h2 className="home-slogan-description">
          With me, your website, app, or anything you want to build on the web,
          is on safe hands of an expert engineer and solutions architect.
        </h2>
      </div>
    </section>
  );
};

export default Home;
