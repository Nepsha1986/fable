import ScrollProgress from '@/components/ScrollProgress';

import NightSky from './_scenes/NightSky';
import Sunrise from './_scenes/Sunrise';
import Ocean from './_scenes/Ocean';
import Reef from './_scenes/Reef';
import Cave from './_scenes/Cave';
import Abyss from './_scenes/Abyss';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main>
        <NightSky />
        <Sunrise />
        <Ocean />
        <Reef />
        <Cave />
        <Abyss />
      </main>
    </>
  );
}
