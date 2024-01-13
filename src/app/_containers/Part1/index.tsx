'use client';
import Scene from '@/components/Scene';
import Star from '@/components/Star';
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
        <h1>The Life</h1>
        <p>
          {
            "Life is a magnificent journey filled with awe-inspiring moments, and it is our privilege to cherish and value each heartbeat that contributes to this extraordinary tapestry. Enjoy every moment, for life's true beauty lies in the appreciation of its simple yet profound wonders."
          }
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part1;
