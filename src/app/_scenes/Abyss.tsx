import Scene, { SceneItem, SceneText } from '@/components/Scene';
import Bubble from '@/components/Bubble';
import SiteFooter from '@/components/SiteFooter';
import { createRandom, scatter } from '@/utils/random';

const random = createRandom(6);

const bubbles = scatter(random, 50).map((point) => ({
  ...point,
  size: random.int(3, 25),
}));

const background =
  'linear-gradient(to bottom, #03011f, #03011c, #020019, #020016, #010012)';

const Abyss = () => (
  <Scene
    id="abyss"
    label="The end"
    background={background}
    footer={<SiteFooter />}
    layers={bubbles.map((bubble, index) => (
      <SceneItem
        key={index}
        top={bubble.y}
        left={bubble.x}
        depth={bubble.depth}
      >
        <Bubble size={bubble.size} />
      </SceneItem>
    ))}
  >
    <SceneText>
      <small>The end</small>
      <h2>Thanks for diving in</h2>
      <p>
        Every journey ends where the next one begins. Take a breath and head
        back up — the stars are still there, waiting.
      </p>
      <p>
        <a href="#top">Back to the surface ↑</a>
      </p>
    </SceneText>
  </Scene>
);

export default Abyss;
