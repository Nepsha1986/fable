const generateRandomNumber = (min: number = 0, max: number = 100): number => {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
};

type Options = {
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  depthMin?: number;
  depthMax?: number;
};

const generateCoordinates = (
  n: number,
  options: Options = {},
): { x: string; y: string; depth: number }[] => {
  const {
    xMin = 0,
    xMax = 100,
    yMin = 0,
    yMax = 100,
    depthMin = -600,
    depthMax = 0,
  } = options;
  const coordinates: { x: string; y: string; depth: number }[] = [];

  for (let i = 0; i < n; i++) {
    const x = `${generateRandomNumber(xMin, xMax)}%`;
    const y = `${generateRandomNumber(yMin, yMax)}%`;
    const depth = generateRandomNumber(depthMin, depthMax);

    coordinates.push({ x, y, depth });
  }

  return coordinates;
};

export { generateCoordinates, generateRandomNumber };
