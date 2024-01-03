const Sun = () => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 50 50">
      <circle
        id="sunBeam"
        r="20"
        cy="25"
        cx="25"
        fill="#ffe160"
        stroke="#fbeC5d"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="3s"
          repeatCount="indefinite"
        />

        <animate
          attributeName="r"
          attributeType="XML"
          from="12"
          to="20"
          begin="0s"
          dur="3s"
          fill="remove"
          repeatCount="indefinite"
        />
      </circle>

      <circle id="sun" r="13" cy="25" cx="25" fill="#ffe160" />
    </svg>
  );
};

export default Sun;
