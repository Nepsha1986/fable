import Scene, { SceneItem, SceneText } from '@/components/Scene';
import Bubble from '@/components/Bubble';
import DepthBands from '@/components/DepthBands';
import Art from '@/components/Art';
import { createRandom, scatter } from '@/utils/random';

import background from '@/assets/art/cave/background.svg';
import cave1 from '@/assets/art/cave/cave-1.svg';
import cave2 from '@/assets/art/cave/cave-2.svg';
import cave3 from '@/assets/art/cave/cave-3.svg';
import fishes from '@/assets/art/cave/fishes.svg';

const random = createRandom(5);

const bubbles = scatter(random, 50, { depthMin: -25 }).map((point) => ({
  ...point,
  size: random.int(3, 20),
}));

// The cave artwork is 1866×1307. Keep the stage wide enough for it to cover
// the whole scene height on portrait screens.
const sceneHeight = '120svh';
const stageMinWidth = `calc(${sceneHeight} * 1.43)`;

const Cave = () => (
  <Scene
    id="cave"
    label="Underwater cave"
    background="#040120"
    minHeight={sceneHeight}
    stageMinWidth={stageMinWidth}
    layers={
      <>
        <SceneItem width="100%" left="0%" depth={-160}>
          <Art src={background} />
        </SceneItem>

        <SceneItem width="100%" depth={-150}>
          <Art src={fishes} />
        </SceneItem>

        <SceneItem width="100%" depth={-50}>
          <Art src={cave3} />
        </SceneItem>

        <SceneItem width="100%" depth={-10}>
          <Art src={cave2} />
        </SceneItem>

        <SceneItem width="100%">
          <Art src={cave1} />
        </SceneItem>

        <DepthBands
          items={bubbles}
          render={(bubble) => <Bubble size={bubble.size} />}
        />
      </>
    }
  >
    <SceneText>
      <small>Chapter IV · Stillness</small>
      <h2>Life is now</h2>
      <p>
        The deeper you go, the quieter it becomes, until only the present
        remains. Happiness was never somewhere ahead — it waits in the moment
        you finally stop running toward it.
      </p>
    </SceneText>
  </Scene>
);

export default Cave;
