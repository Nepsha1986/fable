import Scene, { SceneItem, SceneText } from '@/components/Scene';
import Art from '@/components/Art';

import dolphinLarge from '@/assets/art/ocean/dolphin-large.svg';
import dolphinSmall from '@/assets/art/ocean/dolphin-small.svg';
import fishes1 from '@/assets/art/ocean/fishes-1.svg';
import fishes2 from '@/assets/art/ocean/fishes-2.svg';

const background =
  'linear-gradient(to bottom, #377afb, #2a20dd, #271ccf, #2318c1, #2014b4)';

const Ocean = () => (
  <Scene
    id="ocean"
    label="Open ocean"
    background={background}
    overflow="visible"
    layers={
      <>
        <SceneItem depth={-280} width="110%" left="-5%" bottom="0px">
          <Art src={fishes2} />
        </SceneItem>

        <SceneItem depth={-180} width="110%" left="-5%" bottom="0px">
          <Art src={fishes1} />
        </SceneItem>

        <SceneItem depth={-150} width="110%" left="-5%" bottom="0px">
          <Art src={dolphinSmall} />
        </SceneItem>

        <SceneItem depth={-80} width="100%" left="0%" bottom="0px">
          <Art src={dolphinLarge} />
        </SceneItem>
      </>
    }
  >
    <SceneText position="bottom">
      <h2>Life is Kindness</h2>
      <p>
        In the tapestry of life, weave kindness and compassion into every
        interaction, creating a world that reflects the beauty within your
        heart. Face challenges with resilience, understanding that they are
        stepping stones toward personal growth and triumph.
      </p>
    </SceneText>
  </Scene>
);

export default Ocean;
