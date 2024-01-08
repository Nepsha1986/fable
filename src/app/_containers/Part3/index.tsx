'use client';

import React, { useEffect, useState } from 'react';
import Scene from '@/components/Scene';
import Fish, { Fishes } from '@/components/Fish';
import { generateCoordinates, generateRandomNumber } from '@/utils';

const Part3 = () => {
  const [bubbles, setBubbles] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  const [fishPack, setFishPack] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  const [bgFishes, setBgFishes] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setBubbles(generateCoordinates(50));
    setBgFishes(
      generateCoordinates(20, {
        depthMax: -300,
        depthMin: -500,
        xMax: 120,
        xMin: -20,
        yMax: 80,
      }),
    );
    setFishPack(
      generateCoordinates(50, {
        yMin: 80,
        yMax: 90,
        depthMax: -10,
        depthMin: -100,
        xMax: 110,
        xMin: 75,
      }),
    );
  }, []);

  return (
    <Scene background="linear-gradient(to bottom, #a6bafd, #8199ff, #6077fd, #4352f6, #2d23eb)">
      {bgFishes.map((i, index) => {
        const size = generateRandomNumber(50, 200);

        return (
          <Scene.Item key={index} bottom={i.y} left={i.x} depth={i.depth}>
            <Fish
              flip={!!generateRandomNumber(0, 1)}
              color={`rgba(6,83,167, ${1})`}
              size={`${size}px`}
              type={`${generateRandomNumber(2, 3)}` as keyof typeof Fishes}
            />
          </Scene.Item>
        );
      })}

      {fishPack.map((i, index) => {
        const size = generateRandomNumber(15, 40);

        return (
          <Scene.Item
            key={index}
            bottom={i.y}
            left={i.x}
            depth={i.depth}
            height={`${size}px}`}
            width={`${size}px`}
          >
            <Fish />
          </Scene.Item>
        );
      })}
    </Scene>
  );
};

export default Part3;
