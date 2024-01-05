'use client';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates } from '@/utils';
import { useEffect, useState } from 'react';

const Part4 = () => {
  const [bubbles, setBubbles] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setBubbles(generateCoordinates(50));
  }, []);

  return (
    <Scene background="linear-gradient(to bottom, #2d23eb, #2419c3, #1a109c, #110878, #070255)">
      {bubbles.map((i, index) => (
        <Scene.Item key={index} top={i.y} left={i.x} depth={i.depth}>
          <Bubble />
        </Scene.Item>
      ))}
    </Scene>
  );
};

export default Part4;
