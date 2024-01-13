'use client';

import React from 'react';
import Scene from '@/components/Scene';
import Sun from './Sun';
import Bird from '@/components/Bird/Bird';
import { generateCoordinates, generateRandomNumber } from '@/utils';
import moon from './moon.png';
import {
  BirdsGroup,
  CloudsGroup,
  CloudsGroup2,
  CloudsGroup3,
  Sea,
  Shore,
  PalmTrees,
} from '@/canvas/Island';
import Wave from '@/components/Wave';

const birds = generateCoordinates(21, {
  yMin: 50,
  yMax: 65,
  xMin: 5,
  xMax: 40,
  depthMin: -200,
  depthMax: -300,
});

const Part2 = () => {
  return (
    <Scene
      background="linear-gradient(to bottom, #000922 5%, #00455f 40%, #008686 50%, #74c693 60%, #f6ff9d)"
      minHeight="180dvh"
    >
      <Scene.Item width="1200px" bottom="-100px" left="-30%" depth={-600}>
        <Sun />
      </Scene.Item>

      <Scene.Item
        width="500px"
        top="5%"
        right="-20%"
        depth={-300}
        scrollStyles={(scrollYProgress) => {
          const yPos = scrollYProgress.get();
          return { opacity: 1 - yPos * 2, y: yPos * 1000 };
        }}
      >
        <img src={moon.src} alt="moon" />
      </Scene.Item>

      <Scene.Item depth={-175} width={'130%'} left="-15%" bottom="0px">
        <CloudsGroup3 />
      </Scene.Item>

      <Scene.Item depth={-150} width={'125%'} left="-12,5%" bottom="0px">
        <CloudsGroup2 />
      </Scene.Item>

      <Scene.Item depth={-130} width={'125%'} left="-12,5%" bottom="0px">
        <CloudsGroup />
      </Scene.Item>

      {birds.map((i, index) => {
        const size = `${generateRandomNumber(30, 50)}px`;

        return (
          <Scene.Item
            width={size}
            height={size}
            bottom={i.y}
            left={i.x}
            depth={i.depth}
            key={index}
          >
            <Bird />
          </Scene.Item>
        );
      })}

      <Scene.Item depth={-120} width={'120%'} left="-200px" bottom="-270px">
        <PalmTrees />
      </Scene.Item>

      <Scene.Item width="120%" left="-10%" bottom="-225px" depth={-80}>
        <Shore />
      </Scene.Item>

      <Scene.Item
        width="100%"
        depth={-40}
        left="0%"
        bottom="-225px"
        scrollStyles={(scrollYProgress) => {
          const yPos = scrollYProgress.get();
          return { x: yPos * 200, y: -yPos * 100 };
        }}
      >
        <BirdsGroup />
      </Scene.Item>

      <Scene.Item width="120%" left="-10%" bottom="-225px" depth={-80}>
        <Sea />
      </Scene.Item>

      <Scene.Item width="120%" depth={-15} bottom="0" left="-10%">
        <Wave id="first_wave" type="1" />
      </Scene.Item>

      <Scene.Item width="100%" bottom="15px" depth={0}>
        <Wave id="second_wave" type="2" />
      </Scene.Item>

      <Scene.Item width="100%" bottom="-5px" depth={0}>
        <Wave
          id="third_wave"
          type="2"
          startColor={'#377afb'}
          endColor={'#377afb'}
        />
      </Scene.Item>

      <Scene.TextBlock position="bottom" bordered>
        <p>
          Embrace each dawn with gratitude, for it offers a canvas of endless
          possibilities.
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part2;
