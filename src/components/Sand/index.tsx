export const Sands = {
  '1': 'M22.4,-6.7C22.4,0.2,11.2,0.4,-1,0.4C-13.3,0.4,-26.5,0.2,-26.5,-6.7C-26.5,-13.5,-13.3,-27,-1,-27C11.2,-27,22.4,-13.5,22.4,-6.7Z',
  '2': 'M22.9,-2.5C22.9,1.7,11.4,3.4,-1.7,3.4C-14.9,3.4,-29.8,1.7,-29.8,-2.5C-29.8,-6.7,-14.9,-13.3,-1.7,-13.3C11.4,-13.3,22.9,-6.7,22.9,-2.5Z',
  '3': 'M29.2,-8.4C31.1,-3.7,21.2,6,13.9,9C6.5,12,1.6,8.2,-5.4,4C-12.4,-0.3,-21.5,-5.1,-20.9,-8C-20.4,-10.9,-10.2,-12,1.7,-12.5C13.7,-13.1,27.3,-13.2,29.2,-8.4Z',
  '4': 'M11.6,-21.2C15.3,-18,18.8,-15.4,25.1,-12C31.3,-8.6,40.4,-4.3,43.2,1.6C46.1,7.6,42.7,15.2,37.1,19.7C31.5,24.2,23.6,25.6,17,29C10.4,32.4,5.2,37.7,-1.2,39.8C-7.5,41.8,-15.1,40.5,-22.1,37.3C-29,34.2,-35.4,29.2,-34.5,22.6C-33.7,16.1,-25.5,8,-22.6,1.7C-19.8,-4.7,-22.2,-9.5,-21.9,-14C-21.7,-18.6,-18.8,-23,-14.7,-26C-10.6,-28.9,-5.3,-30.4,-0.7,-29.3C4,-28.1,7.9,-24.3,11.6,-21.2Z',
};

interface Props {
  size?: string;
  type?: keyof typeof Sands;
  startColor?: string;
  endColor?: string;
}
const Sand = ({
  size = '100px',
  type = '1',
  startColor = 'rgba(248, 117, 55, 1)',
  endColor = 'rgba(251, 168, 31, 1)',
}: Props) => {
  return (
    <div style={{ fontSize: size }}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor={startColor} offset="0%"></stop>
            <stop id="stop2" stopColor={endColor} offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d={Sands[type]}
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
    </div>
  );
};

export default Sand;
