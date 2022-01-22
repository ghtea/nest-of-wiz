import {ThemeUIStyleObject as Sx} from "theme-ui";
import {lightModeColors} from "./colors";

export type {Sx as Sx};

// https://theme-ui.com/theme-spec
export const theme = {
  breakpoints: [
                //       0 <= screen < 600px  | sm
    "37.5rem",  //   600px <= screen < 960px  | md
    "60rem",    //   960px <= screen < 1440px | lg
    "90rem",    //  1440px <= screen          | xl
  ],
  background: {},
  config: {
    initialColorModeName: 'light',
  },
  colors: {
    ...lightModeColors,
    modes: {
      dark: {}
    }
  },
  space: [0,2,4,8,16,32,64,128,256,512],
  sizes: {
    col12: {
      1: "8.3333%",
      2: "16.6666%",
      3: "25%",
      4: "33.3333%",
      5: "41.6666%",
      6: "50%",
      7: "58.3333%",
      8: "66.6666%",
      9: "75%",
      10: "83.3333%",
      11: "91.6666%",
      12: "100%",
    },
  },
  fontSizes: {
    xxh: "6rem", // 96 px
    xh: "4rem", // 64 px
    huge: "3rem", // 48 px
    //
    xxl: "1.875rem", // 30 px
    xl: "1.5rem", // 24 px
    lg: "1.25rem", // 20 px
    //
    body: "1rem", // 16 px
    //
    sm: "0.875rem", // 14 px
    xs: "0.75rem", // 12 px
    xxs: "0.625rem", // 10 px
  },
  fonts: {
    default: "Noto Sans KR, sans-serif",
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    default: 1.5,
  },
  letterSpacings: {
    default: "normal",
  },
  fontStyle: {
    default: "normal",
  },
  text: {},
  buttons: {},
  forms: {},
  variants: {},
  shadows: {},
  radii: {
    default: 4,
  },
  borders: {},
  borderWidths: {},
  borderStyles: {},
  zIndices: {
    navBar: 300,
    toolBar: 200,
    modal: 500,
  },
  transitions: {},
  styles: {
    pre : {
      "body": {
        margin: "0 !important",
        padding: "0 !important",
      }
    },
  },
};

export default theme;
