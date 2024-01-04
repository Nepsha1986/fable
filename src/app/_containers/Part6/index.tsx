import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates, generateRandomNumber } from '@/utils';

const Part6 = () => {
  const bubbles = generateCoordinates(250);

  return (
    <Scene background="linear-gradient(to bottom, #03011f, #03011c, #020019, #020016, #010012);">
      {bubbles.map((i, index) => (
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
          <Bubble size={generateRandomNumber(3, 25)} />
        </Scene.Item>
      ))}
      <Scene.TextBlock>
        <h1>Part 6</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis
          libero maiores molestias quae vel vero! Aliquam delectus dicta
          voluptatum?
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part6;
