const generateCoordinates = (n: number, margin: number = 20) => {
  const coordinates: { x: string; y: string; depth: number }[] = [];

  for (let i = 0; i < n; i++) {
    const x = `${margin + Math.random() * (100 - 2 * margin)}%`;
    const y = `${margin + Math.random() * (100 - 2 * margin)}%`;
    const depth = Math.random() * -600;

    coordinates.push({ x, y, depth });
  }

  return coordinates;
};

export { generateCoordinates };
