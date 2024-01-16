'use client';

import React from 'react';
import Scene from '@/components/Scene';
import DolphinLarge from '@/components/SeaSurface/DolphinLarge';
import DolphinSmall from '@/components/SeaSurface/DolphinSmall';
import FishGroup1 from '@/components/SeaSurface/FishGroup1';
import FishGroup2 from '@/components/SeaSurface/FishGroup2';

const sceneBg =
  'linear-gradient(to bottom, #377afb, #2a20dd, #271ccf, #2318c1, #2014b4)';

const Part3 = () => {
  return (
    <Scene background={sceneBg} overflow="visible">
      <Scene.Item depth={-280} width="110%" left={'-5%'} bottom="0px">
        <FishGroup2 />
      </Scene.Item>

      <Scene.Item depth={-180} width="110%" left={'-5%'} bottom="0px">
        <FishGroup1 />
      </Scene.Item>

      <Scene.Item depth={-150} width="110%" left={'-5%'} bottom="0px">
        <DolphinSmall />
      </Scene.Item>

      <Scene.Item depth={-80} width="100%" left={'0%'} bottom="0px">
        <DolphinLarge />
      </Scene.Item>

      <Scene.TextBlock position="bottom">
        <h2>Life is Kindness</h2>
        <p>
          In the tapestry of life, weave kindness and compassion into every
          interaction, creating a world that reflects the beauty within your
          heart. Face challenges with resilience, understanding that they are
          stepping stones toward personal growth and triumph.
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part3;
