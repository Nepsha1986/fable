import React, { useContext } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import SceneContext from '@/components/Scene/context';

interface Props {
  children: React.ReactNode;
}

const Heading = ({ children }: Props) => {
  const { container } = useContext(SceneContext);

  useGSAP(
    () => {
      gsap.to('.gsap-heading', {
        scrollTrigger: '.gsap-heading', // start animation when ".box" enters the viewport
        scale: 2,
        y: '-30vh',
        opacity: '0.1',
      });
    },
    {
      scope: container,
    },
  );

  return <h1 className="gsap-heading">{children}</h1>;
};

export default Heading;
