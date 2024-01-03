import Scene from '@/components/Scene';
import Bubble from '@/components/Bubble';
import { generateCoordinates } from '@/utils';
import Star from '@/components/Star';

const Part3 = () => {
  const bubbles = generateCoordinates(250);

  return (
    <Scene background="linear-gradient(to bottom, #a6bafd, #8199ff, #6077fd, #4352f6, #2d23eb);">
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
        <h1>Part 3</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis
          libero maiores molestias quae vel vero! Aliquam delectus dicta
          voluptatum?
        </p>
      </Scene.TextBlock>
    </Scene>
  );
};

export default Part3;
