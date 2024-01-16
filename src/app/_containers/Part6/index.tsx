'use client';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import SiteFooter from '@/components/SiteFooter';

import { generateCoordinates, generateRandomNumber } from '@/utils';

const bubbles = generateCoordinates(50);
const Part6 = () => {
  return (
    <Scene background="linear-gradient(to bottom, #03011f, #03011c, #020019, #020016, #010012)">
      {bubbles.map((i, index) => (
        <Scene.Item key={index} top={i.y} left={i.x} depth={i.depth}>
          <Bubble size={generateRandomNumber(3, 25)} />
        </Scene.Item>
      ))}

      <Scene.TextBlock>
        <h1>The End</h1>
      </Scene.TextBlock>

      <Scene.Footer>
        <SiteFooter />
      </Scene.Footer>
    </Scene>
  );
};

export default Part6;
