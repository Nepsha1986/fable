'use client';

import React, { useEffect, useState } from 'react';
import Scene from '@/components/Scene';
import Cloud, { Clouds } from './Cloud';
import Sun from './Sun';
import Bird from '@/components/Bird/Bird';
import { generateCoordinates, generateRandomNumber } from '@/utils';
import moon from './moon.png';
import Island from '@/components/Island';
import Sea from '@/components/Sea/Sea';

const Part2 = () => {
  const [clouds, setClouds] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);
  const [birds, setBirds] = useState<
    Array<{ x: string; y: string; depth: number }>
  >([]);

  useEffect(() => {
    setClouds(
      generateCoordinates(21, {
        yMin: 55,
        yMax: 85,
        xMin: -20,
        xMax: 120,
        depthMin: -200,
      }),
    );

    setBirds(
      generateCoordinates(21, {
        yMin: 50,
        yMax: 65,
        xMin: 55,
        xMax: 90,
        depthMin: -200,
      }),
    );
  }, []);

  return (
    <Scene
      background="linear-gradient(to bottom, #000922 5%, #00455f 40%, #008686 , #74c693, #f6ff9d)"
      minHeight="200dvh"
    >
      <Scene.Item width="40vw" bottom="10%" left="-15%" depth={-600}>
        <Sun />
      </Scene.Item>

      <Scene.Item width="30%" top="10%" right="-20%" depth={-300}>
        <img src={moon.src} alt="moon" />
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

      <Scene.Item width="120%" left="-10%" bottom="-225px" depth={-80}>
        <Island />
      </Scene.Item>

      <Scene.Item width="120%" left="-10%" bottom="-225px" depth={-80}>
        <Sea />
      </Scene.Item>

      <Scene.Item width="120%" depth={-15} bottom="0" left="-10%">
        <svg
          id="wave"
          viewBox="0 0 1440 170"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop
                stopColor="rgba(134.942, 161.407, 246.249, 1)"
                offset="0%"
              ></stop>
              <stop
                stopColor="rgba(105.154, 169.997, 241.695, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,85L48,96.3C96,108,192,130,288,121.8C384,113,480,74,576,68C672,62,768,91,864,96.3C960,102,1056,85,1152,65.2C1248,45,1344,23,1440,22.7C1536,23,1632,45,1728,59.5C1824,74,1920,79,2016,73.7C2112,68,2208,51,2304,45.3C2400,40,2496,45,2592,56.7C2688,68,2784,85,2880,102C2976,119,3072,136,3168,119C3264,102,3360,51,3456,28.3C3552,6,3648,11,3744,36.8C3840,62,3936,108,4032,119C4128,130,4224,108,4320,107.7C4416,108,4512,130,4608,138.8C4704,147,4800,142,4896,116.2C4992,91,5088,45,5184,39.7C5280,34,5376,68,5472,73.7C5568,79,5664,57,5760,62.3C5856,68,5952,102,6048,96.3C6144,91,6240,45,6336,25.5C6432,6,6528,11,6624,31.2C6720,51,6816,85,6864,102L6912,119L6912,170L6864,170C6816,170,6720,170,6624,170C6528,170,6432,170,6336,170C6240,170,6144,170,6048,170C5952,170,5856,170,5760,170C5664,170,5568,170,5472,170C5376,170,5280,170,5184,170C5088,170,4992,170,4896,170C4800,170,4704,170,4608,170C4512,170,4416,170,4320,170C4224,170,4128,170,4032,170C3936,170,3840,170,3744,170C3648,170,3552,170,3456,170C3360,170,3264,170,3168,170C3072,170,2976,170,2880,170C2784,170,2688,170,2592,170C2496,170,2400,170,2304,170C2208,170,2112,170,2016,170C1920,170,1824,170,1728,170C1632,170,1536,170,1440,170C1344,170,1248,170,1152,170C1056,170,960,170,864,170C768,170,672,170,576,170C480,170,384,170,288,170C192,170,96,170,48,170L0,170Z"
          ></path>
        </svg>
      </Scene.Item>

      <Scene.Item width="100%" bottom="-5px" depth={0}>
        <svg
          id="wave"
          viewBox="0 0 1440 170"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop
                stopColor="rgba(165.654, 186.897, 255, 1)"
                offset="0%"
              ></stop>
              <stop
                stopColor="rgba(193.01, 222.449, 255, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-2)"
            d="M0,102L48,110.5C96,119,192,136,288,144.5C384,153,480,153,576,133.2C672,113,768,74,864,68C960,62,1056,91,1152,104.8C1248,119,1344,119,1440,99.2C1536,79,1632,40,1728,25.5C1824,11,1920,23,2016,45.3C2112,68,2208,102,2304,96.3C2400,91,2496,45,2592,22.7C2688,0,2784,0,2880,17C2976,34,3072,68,3168,68C3264,68,3360,34,3456,22.7C3552,11,3648,23,3744,22.7C3840,23,3936,11,4032,25.5C4128,40,4224,79,4320,99.2C4416,119,4512,119,4608,121.8C4704,125,4800,130,4896,121.8C4992,113,5088,91,5184,70.8C5280,51,5376,34,5472,25.5C5568,17,5664,17,5760,39.7C5856,62,5952,108,6048,116.2C6144,125,6240,96,6336,96.3C6432,96,6528,125,6624,127.5C6720,130,6816,108,6864,96.3L6912,85L6912,170L6864,170C6816,170,6720,170,6624,170C6528,170,6432,170,6336,170C6240,170,6144,170,6048,170C5952,170,5856,170,5760,170C5664,170,5568,170,5472,170C5376,170,5280,170,5184,170C5088,170,4992,170,4896,170C4800,170,4704,170,4608,170C4512,170,4416,170,4320,170C4224,170,4128,170,4032,170C3936,170,3840,170,3744,170C3648,170,3552,170,3456,170C3360,170,3264,170,3168,170C3072,170,2976,170,2880,170C2784,170,2688,170,2592,170C2496,170,2400,170,2304,170C2208,170,2112,170,2016,170C1920,170,1824,170,1728,170C1632,170,1536,170,1440,170C1344,170,1248,170,1152,170C1056,170,960,170,864,170C768,170,672,170,576,170C480,170,384,170,288,170C192,170,96,170,48,170L0,170Z"
          ></path>
        </svg>
      </Scene.Item>
    </Scene>
  );
};

export default Part2;
