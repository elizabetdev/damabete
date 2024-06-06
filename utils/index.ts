// Function to get a random number within a specified range
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Linear interpolation function
export const lerp = (start: number, end: number, t: number): number => {
  return start * (1 - t) + end * t;
};

// Map function to map a value from one range to another
export const map = (
  value: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
): number => {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
