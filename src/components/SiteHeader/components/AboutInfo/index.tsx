import React, { useState } from 'react';

import Button from '@/components/Button';
import Dialog from '@/components/Dialog';

const AboutInfo = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <>
      <Button onClick={handleClick}>About</Button>

      <Dialog
        heading={'About'}
        open={isActive}
        onClickClose={() => {
          setIsActive(false);
        }}
      >
        <p>
          This project showcases a unique approach to implementing the parallax
          effect through the manipulation of the "perspective-origin" CSS
          property within the encompassing container. The essence of this
          technique lies in dynamically altering the perspective origin, thus
          creating a captivating visual experience. By carefully adjusting this
          property, the project achieves a seamless blend of foreground and
          background elements, offering users a striking sense of depth and
          immersion.
        </p>
      </Dialog>
    </>
  );
};

export default AboutInfo;
