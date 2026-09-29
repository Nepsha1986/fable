import Scene, { SceneItem, SceneText } from '@/components/Scene';
import Bubble from '@/components/Bubble';
import Fish from '@/components/Fish';
import Art from '@/components/Art';
import { createRandom, scatter } from '@/utils/random';

import seabed1 from '@/assets/art/reef/seabed-1.svg';
import seabed2 from '@/assets/art/reef/seabed-2.svg';
import seabed3 from '@/assets/art/reef/seabed-3.svg';
import seabed4 from '@/assets/art/reef/seabed-4.svg';

const random = createRandom(4);

const bubbles = scatter(random, 50).map((point) => ({
  ...point,
  size: random.int(3, 20),
}));

const fishes = scatter(random, 15, {
  depthMin: -500,
  depthMax: -300,
  xMin: -20,
  xMax: 120,
  yMin: 80,
}).map((point) => ({
  ...point,
  size: `${random.int(50, 200)}px`,
  flip: random.next() < 0.5,
  type: random.pick(['2', '3'] as const),
}));

const background =
  'linear-gradient(to bottom, #2014b4, #2419c3, #1a109c, #110878, #070255)';

const Reef = () => (
  <Scene
    id="reef"
    label="Coral reef"
    background={background}
    overflow="visible"
    layers={
      <>
        {fishes.map((fish, index) => (
          <SceneItem
            key={index}
            bottom={fish.y}
            left={fish.x}
            depth={fish.depth}
          >
            <Fish
              type={fish.type}
              flip={fish.flip}
              size={fish.size}
              color="#01155b"
            />
          </SceneItem>
        ))}

        <SceneItem bottom="-5px" left="-17%" width="100%" depth={-350}>
          <Art src={seabed4} />
        </SceneItem>

        <SceneItem bottom="-25px" left="-15%" width="100%" depth={-100}>
          <Art src={seabed3} />
        </SceneItem>

        <SceneItem bottom="-25px" right="-15%" width="100%" depth={-50}>
          <Art src={seabed2} />
        </SceneItem>

        {bubbles.map((bubble, index) => (
          <SceneItem
            key={index}
            top={bubble.y}
            left={bubble.x}
            depth={bubble.depth}
          >
            <Bubble size={bubble.size} />
          </SceneItem>
        ))}

        <SceneItem bottom="-7px" left="0%" width="100%">
          <Art src={seabed1} />
        </SceneItem>
      </>
    }
  >
    <SceneText position="bottom">
      <small>III · The reef</small>
      <h2>Learn. Love. Create.</h2>
      <p>
        A reef is built over centuries by tiny, patient lives. Everything
        worthwhile grows the same way: one curious question, one warm gesture,
        one thing made with your own hands — at a time.
      </p>
    </SceneText>
  </Scene>
);

export default Reef;
