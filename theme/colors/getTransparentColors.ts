import {colord} from "colord";

type getTransparentColorsConfig = {
  name: string;
  hex: string;
  unit?: number;
};

export const getTransparentColors = (config: getTransparentColorsConfig) => {
  const {name, hex, unit = 0.08} = config;

  const transparentColors: Record<string, string> = {};

  for (let alpha = unit; alpha < 1; alpha += unit) {
    const rgba = colord(hex).alpha(alpha).toRgbString();
    const key = `${name}-${alpha * 100}%`;

    transparentColors[key] = rgba;
  }

  return transparentColors;
};
