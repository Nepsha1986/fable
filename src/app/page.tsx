'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import Part1 from '@/app/_containers/Part1';
import Part2 from '@/app/_containers/Part2';
import Part3 from '@/app/_containers/Part3';

import styles from './page.module.css';

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
  }, {});
  return (
    <main className={styles.main}>
      <Part1 />
      <Part2 />
      <Part3 />
    </main>
  );
}
