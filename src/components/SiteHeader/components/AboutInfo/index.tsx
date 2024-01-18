import React, { useState } from 'react';

import Button from '@/components/Button';
import Dialog from '@/components/Dialog';

const personalPageURL = 'https://gift-idea.co/en-us/about-me';
const projectSrcURL = 'https://github.com/Nepsha1986/fable';
const AboutInfo = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <>
      <Button onClick={handleClick} color="light">
        About
      </Button>

      <Dialog
        heading={'About'}
        open={isActive}
        onClickClose={() => {
          setIsActive(false);
        }}
      >
        <p>
          Hello, my name is Alex. I&apos;m a Frontend Developer from Ukraine.
          Feel free to check out my{' '}
          <a href={personalPageURL} target="_blank" rel="author">
            personal page
          </a>{' '}
          for more information.
        </p>

        <p>
          {
            'This project demonstrates an approach to implementing the parallax effect by manipulating the "perspective-origin" CSS property within the parent container, instead of altering the Y coordinate in the 2D dimension layer. The essence of this technique lies in dynamically changing the perspective origin while scrolling, resulting in a captivating visual experience. This approach achieves a seamless blend of foreground and background elements, offering users a striking sense of depth and immersion.'
          }
        </p>

        <p>
          You can find the full code example{' '}
          <a href={projectSrcURL} target="_blank">
            here
          </a>
          .
        </p>
      </Dialog>
    </>
  );
};

export default AboutInfo;
