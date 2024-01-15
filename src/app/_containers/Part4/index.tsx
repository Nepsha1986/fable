'use client';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates, generateRandomNumber } from '@/utils';
import SeaBed4 from '@/components/SeaBed/SeaBed4';
import SeaBed3 from '@/components/SeaBed/SeaBed3';
import SeaBed2 from '@/components/SeaBed/SeaBed2';
import SeaBed1 from '@/components/SeaBed/SeaBed1';

const bubbles = generateCoordinates(50);

const Part4 = () => {
  return (
    <Scene background="linear-gradient(to bottom, #2014b4, #2419c3, #1a109c, #110878, #070255)">
      <Scene.Item bottom="-5px" left="-17%" width="100%" depth={-350}>
        <SeaBed4 />
      </Scene.Item>

      <Scene.Item bottom="-25px" left="-15%" width="100%" depth={-100}>
        <SeaBed3 />
      </Scene.Item>

      <Scene.Item bottom="-25px" right="-15%" width="100%" depth={-50}>
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

      <Scene.TextBlock position="bottom">
        <p>
          Cherish the bonds forged with loved ones, for they are the pillars of
          support that elevate you in times of joy and adversity. As you
          navigate this extraordinary journey, remember that each moment is a
          precious gift – a chance to learn, love, and create a life that
          resonates with the rhythm of your soul.
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part4;
