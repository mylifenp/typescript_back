import Fraction from "fraction.js";

const gcd = (a: number, b: number): number => {
  return b ? gcd(b, a % b) : a;
};

export const megaPixel = (x_resolution: number, y_resolution: number) => {
  if (!x_resolution || !y_resolution) return null;
  return ((x_resolution * y_resolution) / 1000000).toFixed(3);
};

export const opticalAreaX = (x_resolution: number, pixel_size: number) => {
  if (!x_resolution || !pixel_size) return null;
  return parseFloat(((x_resolution * pixel_size) / 1000).toFixed(3));
};

export const opticalAreaY = (y_resolution: number, pixel_size: number) => {
  if (!y_resolution || !pixel_size) return null;
  return parseFloat(((y_resolution * pixel_size) / 1000).toFixed(3));
};

export const opticalDiagonal = (
  x_resolution: number,
  y_resolution: number,
  pixel_size: number
) => {
  const _x = opticalAreaX(x_resolution, pixel_size);
  const _y = opticalAreaY(y_resolution, pixel_size);
  if (!_x || !_y) return null;
  return parseFloat(Math.sqrt(Math.pow(_x, 2) + Math.pow(_y, 2)).toFixed(3));
};

export const exactOpticalAreaDiagonal = (
  x_resolution: number,
  y_resolution: number,
  pixel_size: number
) => {
  const optical_diagonal = opticalDiagonal(
    x_resolution,
    y_resolution,
    pixel_size
  );
  if (!optical_diagonal) return null;
  if (optical_diagonal >= 8.0) {
    return (16 / (optical_diagonal * 25.4)).toFixed(4);
  } else {
    return (18.0 / (optical_diagonal * 25.4)).toFixed(4);
  }
};

export const nextOpticalClass = (
  x_resolution: number,
  y_resolution: number,
  pixel_size: number
) => {
  const optical_diagonal = opticalDiagonal(
    x_resolution,
    y_resolution,
    pixel_size
  );
  if (!optical_diagonal) return null;
};

export const aspectRatio = (x_resolution: number, y_resolution: number) => {
  const r = gcd(x_resolution, y_resolution);
  return `${x_resolution / r}:${y_resolution / r}`;
};

export const centerShiftX = (housing_x: number, optical_center_x: number) => {
  if (!housing_x || !optical_center_x) return null;
  return (optical_center_x - housing_x / 2).toFixed(4);
};
export const centerShiftY = (housing_y: number, optical_center_y: number) => {
  if (!housing_y || !optical_center_y) return null;
  return (optical_center_y - housing_y / 2).toFixed(4);
};

export const escapeRegex = (text: string) => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
