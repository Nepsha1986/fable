'use client';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates } from '@/utils';
import React, { useEffect, useState } from 'react';
import Sand from '@/components/Sand';

const Part3 = () => {
  const [bubbles, setBubbles] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setBubbles(generateCoordinates(250));
  }, []);

  return (
    <Scene
      background="linear-gradient(to bottom, #a6bafd, #8199ff, #6077fd, #4352f6, #2d23eb);"
      overflow="visible"
    >
      {/*<Scene.Item top="-20%" right="5%" depth={-50}>*/}
      {/*  <Sand size='40vh' type='2' startColor='#FFCE54' />*/}
      {/*</Scene.Item>*/}

      {/*<Scene.Item top="-20%" right="25%" depth={-40}>*/}
      {/*  <Sand size='40vh' type='3' startColor='#FFCE54' />*/}
      {/*</Scene.Item>*/}

      {/*<Scene.Item top="-20%" right="15%" depth={-30}>*/}
      {/*  <Sand size='40vh' type='4' startColor='#FFCE54' />*/}
      {/*</Scene.Item>*/}

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
