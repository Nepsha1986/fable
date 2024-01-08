const CaveBg = () => {
  return (
    <svg viewBox="0 0 180 130">
      <defs>
        <radialGradient
          id="cave_bg_gradient"
          cx="0.35"
          cy="0.35"
          r="0.5"
          fx="0.2"
          fy="0.2"
        >
          <stop offset="0%" stopColor={'#c4cff8'} />
          <stop offset="25%" stopColor={'#5a75d3'} />
          <stop offset="100%" stopColor={'#071f77'} />
        </radialGradient>
      </defs>

      <rect width="180" height="130" x="0" fill="url(#cave_bg_gradient)" />
    </svg>
  );
};

export default CaveBg;
