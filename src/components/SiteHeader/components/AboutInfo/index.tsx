'use client';
import React, { useState } from 'react';

import Button from '@/components/Button';
import Dialog from '@/components/Dialog';
import { site } from '@/config/site';

const AboutInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        About
      </Button>

      <Dialog heading="About" open={isOpen} onClose={() => setIsOpen(false)}>
        <p>
          Hi, I&apos;m Alex, a frontend developer from Ukraine. More about me on
          my{' '}
          <a href={site.author.url} target="_blank" rel="author noopener">
            personal page
          </a>
          .
        </p>

        <p>
          This project explores a different way to build a parallax effect.
          Instead of moving every layer along the Y axis on scroll, each scene
          is a 3D box: layers are placed at different depths with{' '}
          <code>translateZ</code>, and while the scene scrolls, only the{' '}
          <code>perspective-origin</code> of its container moves from top to
          bottom. The browser does the rest — distant layers shift less than
          near ones, just like in real life.
        </p>

        <p>
          The source code is available on{' '}
          <a href={site.sourceUrl} target="_blank" rel="noopener">
            GitHub
          </a>
          .
        </p>
      </Dialog>
    </>
  );
};

export default AboutInfo;
