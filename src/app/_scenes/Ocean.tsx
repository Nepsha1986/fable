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
      <small>Chapter II · The Crossing</small>
      <h2>Life is kindness</h2>
      <p>
        No one crosses the ocean alone. We are carried by hands we never saw and
        by the kindness of strangers — until one day, without knowing it, we
        become that current for someone else.
      </p>
    </SceneText>
  </Scene>
);

export default Ocean;
