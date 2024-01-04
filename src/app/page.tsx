import React from 'react';

import Part1 from '@/app/_containers/Part1';
import Part2 from '@/app/_containers/Part2';
import Part3 from '@/app/_containers/Part3';
import Part4 from '@/app/_containers/Part4';
import Part5 from '@/app/_containers/Part5';
import Part6 from '@/app/_containers/Part6';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
    </main>
  );
}
