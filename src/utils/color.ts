export const hexToRGB = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  const rgb = [r, g, b];

  if (alpha) {
    return `rgba(${rgb.join(',')}, ${alpha})`;
  }

  return `rgba(${rgb.join(',')})`;
};

export const generateRandomHex = () =>
  `#${Math.random().toString(16).substr(-6)}`;
