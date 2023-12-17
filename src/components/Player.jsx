import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/useKeyboard";

const CHARACTER_SPEED = 3;
const CHARACTER_JUMP_FORCE = 2.5;

export const Player = () => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useKeyboard();
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 4,
    type: "Dynamic",
    position: [0, 0.5, 0],
  }));

  //suscripcion a posicion
  const pos = useRef([0, 0, 0]);
  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  //suscripcion a velocidad
  const vel = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  //
  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );

    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );

    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(CHARACTER_SPEED)
      .applyEuler(camera.rotation); //movimiento respecto a rotacion de camera

    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (jump && Math.abs(vel.current[1]) < 0.036) {
      api.velocity.set(vel.current[0], CHARACTER_JUMP_FORCE, vel.current[2]);
    }
  });

  return <mesh ref={ref} />;
};
