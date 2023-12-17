import { useStore } from "../hooks/useStore";
import * as images from "../images/images";
import { useKeyboard } from "../hooks/useKeyboard";
import { useEffect } from "react";

export const TextureSelector = () => {
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { oak, grass, dirt, stone, glass } = useKeyboard();

  useEffect(() => {
    const options = {
      grass,
      dirt,
      glass,
      oak,
      stone,
    };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );
    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [grass, dirt, glass, oak, stone]);

  return (
    <div className={`texture-selector`}>
      {Object.entries(images).map(([imgKey, img]) => {
        return (
          <img
            className={texture == imgKey.replace("Img", "") ? "selected" : ""}
            key={imgKey}
            src={img}
            alt={imgKey}
          />
        );
      })}
    </div>
  );
};
