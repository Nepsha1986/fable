'use client';
import Scene from '@/components/Scene';
import Star from '@/components/Star';
import { generateCoordinates } from '@/utils';

const Part1 = () => {
  const stars = generateCoordinates(250, {
    xMin: -10,
    xMax: 110,
  });

  return (
    <Scene
      background="linear-gradient(to top, #000922, #000a1c, #000914, #00060a, #000101)"
      overflow="visible"
    >
      {stars.map((i, index) => (
        <Scene.Item
          key={index}
          top={i.y}
          left={i.x}
          depth={i.depth}
          animated={{
            scrollProps: {
              start: 'top top',
              end: '90% top',
              scrub: true,
            },
            animatedProps: {
              ease: 'sine',
              opacity: 0,
            },
          }}
        >
          <Star />
        </Scene.Item>
      ))}
      <Scene.TextBlock>
        <h1>The Fable</h1>
        <p>
          As Lila delved deeper into the mysteries of Eldoria, she discovered a
          prophecy foretelling her role in saving the realm from an impending
          darkness, and with newfound allies, she braved treacherous terrains,
          solving riddles and overcoming obstacles that guarded the path to the
          Moonstone.
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part1;
