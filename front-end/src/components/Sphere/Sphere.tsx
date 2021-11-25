import "./Sphere.css";
import React, { useRef, useState } from "react";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { Color } from "three";

const Sphere: React.FC = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  const sphereColor = new Color();
  const sphereColorHover = new Color();

  sphereColor.setColorName("hotpink");
  sphereColorHover.setColorName("royalblue");

  const onPointerDown = (_event: ThreeEvent<MouseEvent>) => {
    click(true);
  };

  const onPointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!clicked) return;

    ref.current.rotation.x += (event.clientX - ref.current.rotation.x) / 15000;
    ref.current.rotation.y += (event.clientY - ref.current.rotation.y) / 15000;
    ref.current.rotation.z +=
      (event.clientY -
        event.clientX -
        (ref.current.rotation.y - ref.current.rotation.x)) /
      15000;
  };

  const onPointerUp = (_event: ThreeEvent<MouseEvent>) => {
    click(false);
  };

  const onPointerOut = (_event: ThreeEvent<PointerEvent>) => {
    hover(false);
    click(false);
  };

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((_state, _delta) => {
    if (clicked) return;

    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.003;
    ref.current.rotation.z += 0.003;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.05 : 1}
      onPointerOver={(event) => hover(true)}
      onPointerOut={onPointerOut}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
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
