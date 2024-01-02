'use client';
import Scene from '@/components/Scene';
import img from './bg-1.png';
import moon from './moon.png';

const Part1 = () => {
  return (
    <Scene background="#1e1e1e" debug={false}>
      <Scene.Layer width="100%" height="auto" imgSrc={img.src} depth={0.5} />
      <Scene.Layer
        width="150px"
        height="150px"
        top="10%"
        right="80%"
        imgSrc={moon.src}
        depth={10}
      />

      <Scene.Item width="100%" height="auto" depth={-30} bottom="0px">
        <svg
          viewBox="0 0 1440 170"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(62, 105.034, 243, 1)" offset="0%"></stop>
              <stop stopColor="rgba(11, 126.876, 255, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-1)"
            d="M0,119L48,113.3C96,108,192,96,288,87.8C384,79,480,74,576,68C672,62,768,57,864,70.8C960,85,1056,119,1152,119C1248,119,1344,85,1440,79.3C1536,74,1632,96,1728,110.5C1824,125,1920,130,2016,124.7C2112,119,2208,102,2304,93.5C2400,85,2496,85,2592,76.5C2688,68,2784,51,2880,42.5C2976,34,3072,34,3168,51C3264,68,3360,102,3456,116.2C3552,130,3648,125,3744,104.8C3840,85,3936,51,4032,53.8C4128,57,4224,96,4320,96.3C4416,96,4512,57,4608,48.2C4704,40,4800,62,4896,76.5C4992,91,5088,96,5184,96.3C5280,96,5376,91,5472,76.5C5568,62,5664,40,5760,39.7C5856,40,5952,62,6048,76.5C6144,91,6240,96,6336,82.2C6432,68,6528,34,6624,36.8C6720,40,6816,79,6864,99.2L6912,119L6912,170L6864,170C6816,170,6720,170,6624,170C6528,170,6432,170,6336,170C6240,170,6144,170,6048,170C5952,170,5856,170,5760,170C5664,170,5568,170,5472,170C5376,170,5280,170,5184,170C5088,170,4992,170,4896,170C4800,170,4704,170,4608,170C4512,170,4416,170,4320,170C4224,170,4128,170,4032,170C3936,170,3840,170,3744,170C3648,170,3552,170,3456,170C3360,170,3264,170,3168,170C3072,170,2976,170,2880,170C2784,170,2688,170,2592,170C2496,170,2400,170,2304,170C2208,170,2112,170,2016,170C1920,170,1824,170,1728,170C1632,170,1536,170,1440,170C1344,170,1248,170,1152,170C1056,170,960,170,864,170C768,170,672,170,576,170C480,170,384,170,288,170C192,170,96,170,48,170L0,170Z"
          ></path>
        </svg>
      </Scene.Item>

      <Scene.Item width="100%" depth={-15} bottom="0">
        <svg
          id="wave"
          viewBox="0 0 1440 170"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop
                stopColor="rgba(134.942, 161.407, 246.249, 1)"
                offset="0%"
              ></stop>
              <stop
                stopColor="rgba(105.154, 169.997, 241.695, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,85L48,96.3C96,108,192,130,288,121.8C384,113,480,74,576,68C672,62,768,91,864,96.3C960,102,1056,85,1152,65.2C1248,45,1344,23,1440,22.7C1536,23,1632,45,1728,59.5C1824,74,1920,79,2016,73.7C2112,68,2208,51,2304,45.3C2400,40,2496,45,2592,56.7C2688,68,2784,85,2880,102C2976,119,3072,136,3168,119C3264,102,3360,51,3456,28.3C3552,6,3648,11,3744,36.8C3840,62,3936,108,4032,119C4128,130,4224,108,4320,107.7C4416,108,4512,130,4608,138.8C4704,147,4800,142,4896,116.2C4992,91,5088,45,5184,39.7C5280,34,5376,68,5472,73.7C5568,79,5664,57,5760,62.3C5856,68,5952,102,6048,96.3C6144,91,6240,45,6336,25.5C6432,6,6528,11,6624,31.2C6720,51,6816,85,6864,102L6912,119L6912,170L6864,170C6816,170,6720,170,6624,170C6528,170,6432,170,6336,170C6240,170,6144,170,6048,170C5952,170,5856,170,5760,170C5664,170,5568,170,5472,170C5376,170,5280,170,5184,170C5088,170,4992,170,4896,170C4800,170,4704,170,4608,170C4512,170,4416,170,4320,170C4224,170,4128,170,4032,170C3936,170,3840,170,3744,170C3648,170,3552,170,3456,170C3360,170,3264,170,3168,170C3072,170,2976,170,2880,170C2784,170,2688,170,2592,170C2496,170,2400,170,2304,170C2208,170,2112,170,2016,170C1920,170,1824,170,1728,170C1632,170,1536,170,1440,170C1344,170,1248,170,1152,170C1056,170,960,170,864,170C768,170,672,170,576,170C480,170,384,170,288,170C192,170,96,170,48,170L0,170Z"
          ></path>
        </svg>
      </Scene.Item>

      <Scene.Item width="100%" bottom="0" depth={7}>
        <svg
          id="wave"
          viewBox="0 0 1440 170"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop
                stopColor="rgba(165.654, 186.897, 255, 1)"
                offset="0%"
              ></stop>
              <stop
                stopColor="rgba(193.01, 222.449, 255, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-2)"
            d="M0,102L48,110.5C96,119,192,136,288,144.5C384,153,480,153,576,133.2C672,113,768,74,864,68C960,62,1056,91,1152,104.8C1248,119,1344,119,1440,99.2C1536,79,1632,40,1728,25.5C1824,11,1920,23,2016,45.3C2112,68,2208,102,2304,96.3C2400,91,2496,45,2592,22.7C2688,0,2784,0,2880,17C2976,34,3072,68,3168,68C3264,68,3360,34,3456,22.7C3552,11,3648,23,3744,22.7C3840,23,3936,11,4032,25.5C4128,40,4224,79,4320,99.2C4416,119,4512,119,4608,121.8C4704,125,4800,130,4896,121.8C4992,113,5088,91,5184,70.8C5280,51,5376,34,5472,25.5C5568,17,5664,17,5760,39.7C5856,62,5952,108,6048,116.2C6144,125,6240,96,6336,96.3C6432,96,6528,125,6624,127.5C6720,130,6816,108,6864,96.3L6912,85L6912,170L6864,170C6816,170,6720,170,6624,170C6528,170,6432,170,6336,170C6240,170,6144,170,6048,170C5952,170,5856,170,5760,170C5664,170,5568,170,5472,170C5376,170,5280,170,5184,170C5088,170,4992,170,4896,170C4800,170,4704,170,4608,170C4512,170,4416,170,4320,170C4224,170,4128,170,4032,170C3936,170,3840,170,3744,170C3648,170,3552,170,3456,170C3360,170,3264,170,3168,170C3072,170,2976,170,2880,170C2784,170,2688,170,2592,170C2496,170,2400,170,2304,170C2208,170,2112,170,2016,170C1920,170,1824,170,1728,170C1632,170,1536,170,1440,170C1344,170,1248,170,1152,170C1056,170,960,170,864,170C768,170,672,170,576,170C480,170,384,170,288,170C192,170,96,170,48,170L0,170Z"
          ></path>
        </svg>
      </Scene.Item>

      <Scene.Text>
        <span>As Lila delved deeper into the mysteries of Eldoria, </span>
        <span>
          she discovered a prophecy foretelling her role in saving the realm{' '}
        </span>
        <span>from an impending darkness, </span>
        <span>
          and with newfound allies, she braved treacherous terrains, solving
          riddles and overcoming obstacles that guarded the path to the
          Moonstone.
        </span>
      </Scene.Text>

      <Scene.Text>
        <span>Battling fierce mythical beasts </span>
        <span>
          and facing her own fears, Lila&apos;s journey became a testament{' '}
        </span>
        <span>to the power of friendship and resilience, </span>
        <span>
          as she and her companions uncovered the ancient magic that would
          either save Eldoria or plunge it into eternal twilight.
        </span>
      </Scene.Text>

      <Scene.Text>
        <span>With the fate of Eldoria hanging in the balance, </span>
        <span>
          Lila confronted the malevolent Shadow Serpent guarding the Moonstone,{' '}
        </span>
        <span>
          and in a climactic showdown, she harnessed the knowledge gained on her
          quest{' '}
        </span>
        <span>
          to weave a spell of light, banishing the darkness that threatened to
          consume the land.
        </span>
      </Scene.Text>

      <Scene.Text>
        <span>
          As the Whispering Woods echoed with the triumphant song of victory,{' '}
        </span>
        <span>Eldoria flourished once more, </span>
        <span>bathed in the radiant glow of the Moonstone, </span>
        <span>
          and Lila, having fulfilled her destiny, returned to her village with a
          heart full of memories and the enduring magic of a tale well-told.
        </span>
      </Scene.Text>
    </Scene>
  );
};

export default Part1;
