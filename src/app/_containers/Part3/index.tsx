'use client';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates, generateRandomNumber } from '@/utils';
import React, { useEffect, useState } from 'react';
import Sand from '@/components/Sand';
import Fish from '@/components/Fish';

const Part3 = () => {
  const [bubbles, setBubbles] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  const [fishes, setFishes] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setBubbles(generateCoordinates(250));
  }, []);

  useEffect(() => {
    setFishes(
      generateCoordinates(50, {
        yMin: 10,
        yMax: 20,
        depthMax: -10,
        depthMin: -100,
        xMax: 110,
        xMin: 75,
      }),
    );
  }, []);

  return (
    <Scene
      background="linear-gradient(to bottom, #a6bafd, #8199ff, #6077fd, #4352f6, #2d23eb)"
      overflow="visible"
    >
      {bubbles.map((i, index) => (
        <Scene.Item key={index} top={i.y} left={i.x} depth={i.depth}>
          <Bubble />
        </Scene.Item>
      ))}
      {fishes.map((i, index) => {
        const size = generateRandomNumber(15, 40);

        return (
          <Scene.Item
            key={index}
            top={i.y}
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
