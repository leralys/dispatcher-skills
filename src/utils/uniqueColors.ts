import { COLORS } from './constants/colors';

export const randomHEX = (): string => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  );
};

const uniqueColors = (length: number): string[] => {
  if (length <= COLORS.doughnut.length) {
    return COLORS.doughnut;
  }
  const colorsSet: Set<string> = new Set(COLORS.doughnut);
  do {
    colorsSet.add(randomHEX());
  } while (colorsSet.size < length);
  return Array.from(colorsSet);
};

export default uniqueColors;
