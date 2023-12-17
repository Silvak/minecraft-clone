import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD_MAP = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump",
  // block selection
  Digit1: "oak",
  Digit2: "grass",
  Digit3: "dirt",
  Digit4: "stone",
  Digit5: "glass",
};

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    //blocks actions
    oak: false,
    grass: false,
    dirt: false,
    stone: false,
    glass: false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD_MAP[code];

      if (action) {
        // if (action[action]) return

        setActions((preveActions) => ({
          ...preveActions,
          [action]: true,
        }));
      }
    };

    const handleKeyUp = (event) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD_MAP[code];

      if (action) {
        // if (!action[action]) return

        setActions((preveActions) => ({
          ...preveActions,
          [action]: false,
        }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return actions;
};
