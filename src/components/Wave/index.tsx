import React from 'react';
import Wave1 from './components/Wave1';
import Wave2 from './components/Wave2';

export const Waves = {
  '1': Wave1,
  '2': Wave2,
};

type WaveType = {
  type: keyof typeof Waves;
};

export interface WaveProps {
  id: string;
  startColor?: string;
  endColor?: string;
}

const Wave = ({ type = '1', ...props }: WaveProps & WaveType) => {
  const Component = Waves[type];
  return <Component {...props} />;
};

export default Wave;
