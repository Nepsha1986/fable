import Scene, { Reveal, SceneText } from '@/components/Scene';
import Starfield from '@/components/Starfield';
import Scroll from '@/components/Scroll';
import SiteHeader from '@/components/SiteHeader';
import { createRandom, scatter } from '@/utils/random';

const random = createRandom(1);

const stars = scatter(random, 200, { xMin: -10, xMax: 110 }).map((point) => ({
  ...point,
  size: random.int(2, 5),
}));

// Stars don't need a wide stage on phones: there is no artwork to crop.
const noMinWidth = '0px';

const NightSky = () => (
  <Scene
    id="top"
    label="Night sky"
    background="linear-gradient(to top, #000922, #000a1c, #000914, #00060a, #000101)"
    overflow="visible"
    stageMinWidth={noMinWidth}
    header={<SiteHeader />}
    layers={<Starfield stars={stars} />}
  >
    <SceneText reveal={false}>
      <Reveal delay={1} duration={2}>
        <small>Prologue · Origin</small>
        <h1>Life is a wonder</h1>
      </Reveal>
      <Reveal delay={1.7} duration={2}>
        <p>
          Long before your first breath, the light of distant stars was already
          on its way to you. Every atom of you was forged in their fire — you
          are the way the universe learned to wonder at itself.
        </p>
      </Reveal>
      <Reveal delay={3} duration={2}>
        <Scroll href="#sunrise" />
      </Reveal>
    </SceneText>
  </Scene>
);

export default NightSky;
