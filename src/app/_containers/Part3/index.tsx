'use client';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates } from '@/utils';
import { useEffect, useState } from 'react';

const Part3 = () => {
  const [bubbles, setBubbles] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setBubbles(generateCoordinates(250));
  }, []);

  return (
    <Scene background="linear-gradient(to bottom, #a6bafd, #8199ff, #6077fd, #4352f6, #2d23eb);">
      {bubbles.map((i, index) => (
        <Scene.Item key={index} top={i.y} left={i.x} depth={i.depth}>
          <Bubble />
        </Scene.Item>
      ))}
      <Scene.TextBlock>
        <h1>Part 3</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis
          libero maiores molestias quae vel vero! Aliquam delectus dicta
          voluptatum?
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part3;
