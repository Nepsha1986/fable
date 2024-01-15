'use client';
import { motion } from 'framer-motion';

import Scene from '@/components/Scene';
import Star from '@/components/Star';
import Scroll from '@/components/Scroll';
import { generateCoordinates, generateRandomNumber } from '@/utils';

const stars = generateCoordinates(150, {
  xMin: -10,
  xMax: 110,
});

const Part1 = () => {
  return (
    <Scene
      background="linear-gradient(to top, #000922, #000a1c, #000914, #00060a, #000101)"
      overflow="visible"
    >
      {stars.map((i, index) => (
        <Scene.Item key={index} top={i.y} left={i.x} depth={i.depth}>
          <Star size={generateRandomNumber(3, 8)} />
        </Scene.Item>
      ))}
      <Scene.TextBlock>
        <motion.h1
          initial={{ opacity: 0, y: '50px' }}
          animate={{ opacity: 1, y: '0px' }}
          transition={{ duration: 2, delay: 1 }}
        >
          Life is Awesome!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: '50px' }}
          animate={{ opacity: 1, y: '0px' }}
          transition={{ duration: 2, delay: 1.7 }}
        >
          {
            "Life is a magnificent journey filled with awe-inspiring moments, and it is our privilege to cherish and value each heartbeat that contributes to this extraordinary tapestry. Enjoy every moment, for life's true beauty lies in the appreciation of its simple yet profound wonders."
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: '50px' }}
          animate={{ opacity: 1, y: '0px' }}
          transition={{ duration: 2, delay: 4 }}
        >
          <Scroll />
        </motion.div>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part1;
