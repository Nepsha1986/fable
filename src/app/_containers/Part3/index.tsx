'use client';

import React, { useEffect, useState } from 'react';
import Scene from '@/components/Scene';
import Fish, { Fishes } from '@/components/Fish';
import { generateCoordinates, generateRandomNumber } from '@/utils';

const Part3 = () => {
  const [bgFishes, setBgFishes] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setBgFishes(
      generateCoordinates(35, {
        depthMax: -300,
        depthMin: -500,
        xMax: 120,
        xMin: -20,
        yMax: 80,
      }),
    );
  }, []);

  return (
    <Scene background="linear-gradient(to bottom, #377afb, #2a20dd, #271ccf, #2318c1, #2014b4)">
      {bgFishes.map((i, index) => {
        const size = generateRandomNumber(50, 200);

        return (
          <Scene.Item key={index} bottom={i.y} left={i.x} depth={i.depth}>
            <Fish
              flip={!!generateRandomNumber(0, 1)}
              color={`#01155b`}
              size={`${size}px`}
              type={`${generateRandomNumber(2, 3)}` as keyof typeof Fishes}
            />
          </Scene.Item>
        );
      })}

      <Scene.TextBlock bordered position="bottom">
        <p>
          In the tapestry of life, weave kindness and compassion into every
          interaction, creating a world that reflects the beauty within your
          heart.
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part3;
