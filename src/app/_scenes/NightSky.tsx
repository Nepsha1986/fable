import Scene, { Reveal, SceneItem, SceneText } from '@/components/Scene';
import Star from '@/components/Star';
import Scroll from '@/components/Scroll';
import SiteHeader from '@/components/SiteHeader';
import { createRandom, scatter } from '@/utils/random';

const random = createRandom(1);

const stars = scatter(random, 200, { xMin: -10, xMax: 110 }).map((point) => ({
  ...point,
  size: random.int(3, 8),
  delay: random.int(0, 500) / 100,
}));

const NightSky = () => (
  <Scene
    id="top"
    label="Night sky"
    background="linear-gradient(to top, #000922, #000a1c, #000914, #00060a, #000101)"
    overflow="visible"
    header={<SiteHeader />}
    layers={stars.map((star, index) => (
      <SceneItem key={index} top={star.y} left={star.x} depth={star.depth}>
        <Star size={star.size} delay={star.delay} />
      </SceneItem>
    ))}
  >
    <SceneText reveal={false}>
      <Reveal delay={1} duration={2}>
        <h1>Life is Awesome!</h1>
      </Reveal>
      <Reveal delay={1.7} duration={2}>
        <p>
          Life is a magnificent journey filled with awe-inspiring moments, and
          it is our privilege to cherish and value each heartbeat that
          contributes to this extraordinary tapestry. Enjoy every moment, for
          life&apos;s true beauty lies in the appreciation of its simple yet
          profound wonders.
        </p>
      </Reveal>
      <Reveal delay={3} duration={2}>
        <Scroll href="#sunrise" />
      </Reveal>
    </SceneText>
  </Scene>
);

export default NightSky;
