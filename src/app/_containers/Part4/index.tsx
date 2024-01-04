import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates } from '@/utils';

const Part4 = () => {
  const bubbles = generateCoordinates(250);

  return (
    <Scene background="linear-gradient(to bottom, #2d23eb, #2419c3, #1a109c, #110878, #070255)">
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
          <Bubble />
        </Scene.Item>
      ))}
      <Scene.TextBlock>
        <h1>Part 4</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis
          libero maiores molestias quae vel vero! Aliquam delectus dicta
          voluptatum?
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part4;
