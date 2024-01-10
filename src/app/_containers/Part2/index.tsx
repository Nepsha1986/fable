'use client';

import React, { useEffect, useState } from 'react';
import Scene from '@/components/Scene';
import Cloud, { Clouds } from './Cloud';
import Sun from './Sun';
import Bird from '@/components/Bird/Bird';
import { generateCoordinates, generateRandomNumber } from '@/utils';
import moon from './moon.png';
import { BirdsGroup, CloudsGroup, CloudsGroup2, CloudsGroup3, Sea, Shore, PalmTrees } from '../../../canvas/Island';
import Wave from '@/components/Wave';

const Part2 = () => {
  const [clouds, setClouds] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);
  const [birds, setBirds] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setClouds(
      generateCoordinates(12, {
        yMin: 80,
        yMax: 90,
        xMin: -20,
        xMax: 120,
        depthMin: -200,
      }),
    );

    setBirds(
      generateCoordinates(21, {
        yMin: 50,
        yMax: 65,
        xMin: 5,
        xMax: 40,
        depthMin: -200,
        depthMax: -300,
      }),
    );
  }, []);

  return (
    <Scene
      background="linear-gradient(to bottom, #000922 5%, #00455f 40%, #008686 50%, #74c693 60%, #f6ff9d)"
      minHeight="180dvh"
    >
      <Scene.Item width="1200px" bottom="-100px" left="-30%" depth={-600}>
        <Sun />
      </Scene.Item>

      <Scene.Item width="500px" top="10%" right="-20%" depth={-300}>
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

      {clouds.map((i, index) => {
        const size = `${generateRandomNumber(100, 200)}px`;
        const cloudType = `${generateRandomNumber(
          1,
          7,
        )}` as keyof typeof Clouds;

        return (
          <Scene.Item
            width={size}
            height={size}
            bottom={i.y}
            left={i.x}
            depth={i.depth}
            key={index}
          >
            <div
              style={{ filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))' }}
            >
              <Cloud type={cloudType} />
            </div>
          </Scene.Item>
        );
      })}

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

      <Scene.Item width="100%" depth={-40} left="0%" bottom="-225px">
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
    </Scene>
  );
};

export default Part2;
