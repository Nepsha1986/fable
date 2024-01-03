import React from 'react';

const Bubble = ({ color = '#fff', size = '20' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="bubbleGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      <g fill={`url(#bubbleGradient)`} stroke={color} strokeWidth="1">
        <circle cx="32" cy="32" r="30" fill="none" />
      </g>
    </svg>
  );
};

export default Bubble;
