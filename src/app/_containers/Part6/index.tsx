'use client';

import { useEffect, useState } from 'react';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates, generateRandomNumber } from '@/utils';
import SeaShellsTemp from '@/components/SeaShells/SeaShellsTemp';

const Part6 = () => {
  const [bubbles, setBubbles] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setBubbles(generateCoordinates(50));
  }, []);

  return (
    <Scene background="linear-gradient(to bottom, #03011f, #03011c, #020019, #020016, #010012)">
      {bubbles.map((i, index) => (
        <Scene.Item key={index} top={i.y} left={i.x} depth={i.depth}>
          <Bubble size={generateRandomNumber(3, 25)} />
        </Scene.Item>
      ))}

      <Scene.TextBlock>
        <p>Enjoy every moment.</p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part6;
