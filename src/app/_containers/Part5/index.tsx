'use client';

import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import Cave1 from '@/components/Cave/Cave1';
import Cave2 from '@/components/Cave/Cave2';
import Cave3 from '@/components/Cave/Cave3';

import { generateCoordinates, generateRandomNumber } from '@/utils';
import CaveFishes from '@/components/Cave/CaveFishes';
import CaveBg from '@/components/Cave/CaveBg';

const bubbles = generateCoordinates(50, {
  depthMin: -25,
});

const Part5 = () => {
  return (
    <Scene background="#040120" minHeight="120dvh">
      <Scene.Item width="100%" left="0%" depth={-160}>
        <CaveBg />
      </Scene.Item>

      <Scene.Item width="100%" depth={-150}>
        <CaveFishes />
      </Scene.Item>

      <Scene.Item width="100%" depth={-50}>
        <Cave3 />
      </Scene.Item>

      <Scene.Item width="100%" depth={-10}>
        <Cave2 />
      </Scene.Item>

      <Scene.Item width="100%">
        <Cave1 />
      </Scene.Item>

      {bubbles.map((i, index) => (
        <Scene.Item key={index} top={i.y} left={i.x} depth={i.depth}>
          <Bubble size={generateRandomNumber(3, 20)} />
        </Scene.Item>
      ))}

      <Scene.TextBlock position="center">
        <h2>Enjoy every moment</h2>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part5;
