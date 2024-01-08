'use client';

import { useEffect, useState } from 'react';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates, generateRandomNumber } from '@/utils';
import SeaBed4 from "@/components/SeaBed/SeaBed4";
import SeaBed3 from "@/components/SeaBed/SeaBed3";
import SeaBed2 from "@/components/SeaBed/SeaBed2";
import SeaBed1 from "@/components/SeaBed/SeaBed1";

const Part4 = () => {
  const [bubbles, setBubbles] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setBubbles(generateCoordinates(50));
  }, []);

  return (
    <Scene background="linear-gradient(to bottom, #2d23eb, #2419c3, #1a109c, #110878, #070255)">
      <Scene.Item bottom="-5px" left="-17%" width="100%" depth={-350}>
        <SeaBed4 />
      </Scene.Item>

      <Scene.Item bottom="-25px" left="-15%" width="100%" depth={-180}>
        <SeaBed3 />
      </Scene.Item>

      <Scene.Item bottom="-25px" right="-15%" width="100%" depth={-150}>
        <SeaBed2 />
      </Scene.Item>

      {bubbles.map((i, index) => (
        <Scene.Item key={index} top={i.y} left={i.x} depth={i.depth}>
          <Bubble size={generateRandomNumber(3, 20)} />
        </Scene.Item>
      ))}

      <Scene.Item bottom="-5px" left="0%" width="100%">
        <SeaBed1 />
      </Scene.Item>
    </Scene>
  );
};

export default Part4;
