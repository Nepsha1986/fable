import Image from 'next/image';

import Scene, { SceneItem, SceneText } from '@/components/Scene';
import Sun from '@/components/Sun';
import Art from '@/components/Art';
import Wave from '@/components/Wave';
import { createRandom, scatter } from '@/utils/random';

import bird1 from '@/assets/art/birds/bird-1.svg';
import bird2 from '@/assets/art/birds/bird-2.svg';
import bird3 from '@/assets/art/birds/bird-3.svg';
import bird4 from '@/assets/art/birds/bird-4.svg';
import birdsGroup from '@/assets/art/sunrise/birds.svg';
import clouds1 from '@/assets/art/sunrise/clouds-1.svg';
import clouds2 from '@/assets/art/sunrise/clouds-2.svg';
import clouds3 from '@/assets/art/sunrise/clouds-3.svg';
import palmTrees from '@/assets/art/sunrise/palm-trees.svg';
import sea from '@/assets/art/sunrise/sea.svg';
import shore from '@/assets/art/sunrise/shore.svg';
import moon from '@/assets/art/sunrise/moon.png';

const random = createRandom(2);
const birdTypes = [bird1, bird2, bird3, bird4];

const birds = scatter(random, 21, {
  yMin: 50,
  yMax: 65,
  xMin: -5,
  xMax: 40,
  depthMin: -300,
  depthMax: -200,
}).map((point) => ({
  ...point,
  size: `${random.int(40, 60)}px`,
  src: random.pick(birdTypes),
}));

const background =
  'linear-gradient(to bottom, #000922 5%, #00455f 40%, #008686 50%, #74c693 60%, #f6ff9d)';

// The island is drawn for a square stage, so on narrow screens the scene is
// as tall as the (1000px wide) stage.
const sceneHeight = 'max(100vw, 1000px)';

const Sunrise = () => (
  <Scene
    id="sunrise"
    label="Sunrise"
    background={background}
    minHeight={sceneHeight}
    layers={
      <>
        <SceneItem width="1200px" bottom="-100px" left="-30%" depth={-600}>
          <Sun />
        </SceneItem>

        <SceneItem
          width="500px"
          top="5%"
          right="-20%"
          depth={-300}
          motion={{ opacity: [1, -1], y: [0, -1000] }}
        >
          <Image src={moon} alt="" sizes="500px" priority />
        </SceneItem>

        <SceneItem depth={-175} width="130%" left="-15%" bottom="0px">
          <Art src={clouds3} priority />
        </SceneItem>

        <SceneItem depth={-150} width="125%" left="-12.5%" bottom="0px">
          <Art src={clouds2} priority />
        </SceneItem>

        <SceneItem depth={-130} width="125%" left="-12.5%" bottom="0px">
          <Art src={clouds1} priority />
        </SceneItem>

        {birds.map((bird, index) => (
          <SceneItem
            key={index}
            width={bird.size}
            height={bird.size}
            bottom={bird.y}
            left={bird.x}
            depth={bird.depth}
          >
            <Art src={bird.src} />
          </SceneItem>
        ))}

        <SceneItem depth={-120} width="120%" left="-200px" bottom="-270px">
          <Art src={palmTrees} priority />
        </SceneItem>

        <SceneItem width="120%" left="-10%" bottom="-225px" depth={-80}>
          <Art src={shore} priority />
        </SceneItem>

        <SceneItem
          width="100%"
          depth={-40}
          left="0%"
          bottom="-225px"
          motion={{ x: [0, 200], y: [0, -100] }}
        >
          <Art src={birdsGroup} />
        </SceneItem>

        <SceneItem width="120%" left="-10%" bottom="-225px" depth={-80}>
          <Art src={sea} priority />
        </SceneItem>

        <SceneItem width="120%" depth={-15} bottom="0" left="-10%">
          <Wave id="first_wave" type="1" />
        </SceneItem>

        <SceneItem width="100%" bottom="15px">
          <Wave id="second_wave" type="2" />
        </SceneItem>

        <SceneItem width="100%" bottom="-7px">
          <Wave
            id="third_wave"
            type="2"
            startColor="#377afb"
            endColor="#377afb"
          />
        </SceneItem>
      </>
    }
  >
    {/* The bottom margin keeps the text above the waves. */}
    <SceneText position="bottom" panel style={{ marginBottom: '4rem' }}>
      <small>I · Dawn</small>
      <h2>Every morning is a blank canvas</h2>
      <p>
        The sun never asks how yesterday went. It simply rises, paints the sky
        in colors it has never used before and leaves the rest of the picture to
        you.
      </p>
    </SceneText>
  </Scene>
);

export default Sunrise;
