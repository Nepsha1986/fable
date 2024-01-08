'use client';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates, generateRandomNumber } from '@/utils';
import { useEffect, useState } from 'react';

const Part5 = () => {
  const [bubbles, setBubbles] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setBubbles(
      generateCoordinates(50, {
        depthMin: -25,
      }),
    );
  }, []);

  return (
    <Scene background="linear-gradient(to bottom, #070255, #010548, #02053b, #05032d, #03011f)">
      {bubbles.map((i, index) => (
        <Scene.Item key={index} top={i.y} left={i.x} depth={i.depth}>
          <Bubble size={generateRandomNumber(3, 20)} />
        </Scene.Item>
      ))}
    </Scene>
  );
};

export default Part5;
