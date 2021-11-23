import "./Sphere.css";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

const Sphere: React.FC = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  const sphereColor = new Color();
  const sphereColorHover = new Color();

  sphereColor.setColorName("hotpink");
  sphereColorHover.setColorName("royalblue");

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.05 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[2, 32, 16]} />
      <meshStandardMaterial
        color={hovered ? sphereColorHover : sphereColor}
        wireframe={true}
      />
    </mesh>
  );
};

export default Sphere;
