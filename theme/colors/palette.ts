// www.untitledui.com

import {getTransparentColors} from "./getTransparentColors";

export const defaultPalette = {
  "white": "#FFFFFF",
  "black": "#000000",
  "gray-25": "#FCFCFD",
  "gray-50": "#F9FAFB",
  "gray-100": "#F2F4F7",
  "gray-200": "#E4E7EC",
  "gray-300": "#D0D5DD",
  "gray-400": "#98A2B3",
  "gray-500": "#667085",
  "gray-600": "#475467",
  "gray-700": "#344054",
  "gray-800": "#1D2939",
  "gray-900": "#101828",
  "scarlet-25": "#FFFBFA",
  "scarlet-50": "#FEF3F2",
  "scarlet-100": "#FEE4E2",
  "scarlet-200": "#FECDCA",
  "scarlet-300": "#FDA29B",
  "scarlet-400": "#F97066",
  "scarlet-500": "#F04438",
  "scarlet-600": "#D92D20",
  "scarlet-700": "#B42318",
  "scarlet-800": "#912018",
  "scarlet-900": "#7A271A",
  "yellow-25": "#FFFCF5",
  "yellow-50": "#FFFAEB",
  "yellow-100": "#FEF0C7",
  "yellow-200": "#FEDF89",
  "yellow-300": "#FEC84B",
  "yellow-400": "#FEB022",
  "yellow-500": "#F79009",
  "yellow-600": "#DC6803",
  "yellow-700": "#B54708",
  "yellow-800": "#93370D",
  "yellow-900": "#7A2E0E",
  "green-25": "#F6FEF9",
  "green-50": "#ECFDF3",
  "green-100": "#D1FADF",
  "green-200": "#A6F3C5",
  "green-300": "#6CE9A6",
  "green-400": "#32D583",
  "green-500": "#12B76A",
  "green-600": "#039855",
  "green-700": "#027A48",
  "green-800": "#05603A",
  "green-900": "#054F31",
  "blue-gray-25": "#FCFCFD",
  "blue-gray-50": "#F8F9FC",
  "blue-gray-100": "#EAECF5",
  "blue-gray-200": "#C8CCE5",
  "blue-gray-300": "#9EA5D1",
  "blue-gray-400": "#717BBC",
  "blue-gray-500": "#4E5BA6",
  "blue-gray-600": "#3E4784",
  "blue-gray-700": "#363F72",
  "blue-gray-800": "#293056",
  "blue-gray-900": "#101323",
  "light-blue-25": "#F5FBFF",
  "light-blue-50": "#F0F9FF",
  "light-blue-100": "#E0F2FE",
  "light-blue-200": "#B9E6FE",
  "light-blue-300": "#7CD4FD",
  "light-blue-400": "#36BFFA",
  "light-blue-500": "#0BA5EC",
  "light-blue-600": "#0086C9",
  "light-blue-700": "#026AA2",
  "light-blue-800": "#065986",
  "light-blue-900": "#0B4A6F",
  "primary-25": "#F5FAFF",
  "primary-50": "#EFF8FF",
  "primary-100": "#D1E9FF",
  "primary-200": "#B2DDFF",
  "primary-300": "#84CAFF",
  "primary-400": "#53B1FD",
  "primary-500": "#2E90FA",
  "primary-600": "#1570EF",
  "primary-700": "#175CD3",
  "primary-800": "#1849A9",
  "primary-900": "#194185",
  // "blue-25": "#F5FAFF",
  // "blue-50": "#EFF8FF",
  // "blue-100": "#D1E9FF",
  // "blue-200": "#B2DDFF",
  // "blue-300": "#84CAFF",
  // "blue-400": "#53B1FD",
  // "blue-500": "#2E90FA",
  // "blue-600": "#1570EF",
  // "blue-700": "#175CD3",
  // "blue-800": "#1849A9",
  // "blue-900": "#194185",
  "indigo-25": "#F5F8FF",
  "indigo-50": "#EEF4FF",
  "indigo-100": "#E0EAFF",
  "indigo-200": "#C7D7FE",
  "indigo-300": "#A4BCFD",
  "indigo-400": "#8098F9",
  "indigo-500": "#6172F3",
  "indigo-600": "#444CE7",
  "indigo-700": "#3538CD",
  "indigo-800": "#2D31A6",
  "indigo-900": "#2D3282",
  "purple-25": "#FAFAFF",
  "purple-50": "#F4F3FF",
  "purple-100": "#EBE9FE",
  "purple-200": "#D9D6FE",
  "purple-300": "#BDB4FE",
  "purple-400": "#9B8AFB",
  "purple-500": "#7A5AF8",
  "purple-600": "#6938EF",
  "purple-700": "#5925DC",
  "purple-800": "#4A1FB8",
  "purple-900": "#3E1C96",
  "pink-25": "#FEF6FB",
  "pink-50": "#FDF2FA",
  "pink-100": "#FCE7F6",
  "pink-200": "#FCCEEE",
  "pink-300": "#FAA7E0",
  "pink-400": "#F670C7",
  "pink-500": "#EE46BC",
  "pink-600": "#DD2590",
  "pink-700": "#C11574",
  "pink-800": "#93165F",
  "pink-900": "#851651",
  "rose-25": "#FFF5F6",
  "rose-50": "#FFF1F3",
  "rose-100": "#FFE4E8",
  "rose-200": "#FECDD6",
  "rose-300": "#FEA3B4",
  "rose-400": "#FD6F8E",
  "rose-500": "#F63D68",
  "rose-600": "#E31B54",
  "rose-700": "#C01048",
  "rose-800": "#A11043",
  "rose-900": "#89123E",
  "orange-25": "#FFFAF5",
  "orange-50": "#FFF6ED",
  "orange-100": "#FFEAD5",
  "orange-200": "#FDDCAB",
  "orange-300": "#FEB273",
  "orange-400": "#FD853A",
  "orange-500": "#FB6514",
  "orange-600": "#EC4A0A",
  "orange-700": "#C4320A",
  "orange-800": "#9C2A10",
  "orange-900": "#7E2410",
}

export const transparentPalette = {
  ...[
    {name: "white", hex: "#FFFFFF"},
    {name: "black", hex: "#000000"},
    {name: "gray-500", hex: "#667085"},
    {name: "scarlet-500", hex: "#F04438"},
    {name: "yellow-500", hex: "#F79009"},
    {name: "green-500", hex: "#12B76A"},
    {name: "blue-gray-500", hex: "#4E5BA6"},
    {name: "light-blue-500", hex: "#0BA5EC"},
    {name: "blue-500", hex: "#2E90FA"},
    {name: "indigo-500", hex: "#6172F3"},
    {name: "purple-500", hex: "#7A5AF8"},
    {name: "pink-500", hex: "#EE46BC"},
    {name: "rose-500", hex: "#F63D68"},
    {name: "orange-500", hex: "#FB6514"},
  ].reduce((acc, cur) => ({...acc, ...getTransparentColors(cur)}), {} as Record<string, string>),
} as TransparentPalette;

type TransparentPalette = Record<
"white-8%" | "white-16%" | "white-24%" | "white-32%" | "white-40%" | "white-48%" |
"white-56%" | "white-64%" | "white-72%" | "white-80%" | "white-88%" | "white-96%" |
"black-8%" | "black-16%" | "black-24%" | "black-32%" | "black-40%" | "black-48%" |
"black-56%" | "black-64%" | "black-72%" | "black-80%" | "black-88%" | "black-96%" |
"gray-500-8%" | "gray-500-16%" | "gray-500-24%" | "gray-500-32%" | "gray-500-40%" | "gray-500-48%" |
"gray-500-56%" | "gray-500-64%" | "gray-500-72%" | "gray-500-80%" | "gray-500-88%" | "gray-500-96%" |
"scarlet-500-8%" | "scarlet-500-16%" | "scarlet-500-24%" | "scarlet-500-32%" | "scarlet-500-40%" | "scarlet-500-48%" |
"scarlet-500-56%" | "scarlet-500-64%" | "scarlet-500-72%" | "scarlet-500-80%" | "scarlet-500-88%" | "scarlet-500-96%" |
"yellow-500-8%" | "yellow-500-16%" | "yellow-500-24%" | "yellow-500-32%" | "yellow-500-40%" | "yellow-500-48%" |
"yellow-500-56%" | "yellow-500-64%" | "yellow-500-72%" | "yellow-500-80%" | "yellow-500-88%" | "yellow-500-96%" |
"green-500-8%" | "green-500-16%" | "green-500-24%" | "green-500-32%" | "green-500-40%" | "green-500-48%" |
"green-500-56%" | "green-500-64%" | "green-500-72%" | "green-500-80%" | "green-500-88%" | "green-500-96%" |
"blue-gray-500-8%" | "blue-gray-500-16%" | "blue-gray-500-24%" | "blue-gray-500-32%" | "blue-gray-500-40%" | "blue-gray-500-48%" |
"blue-gray-500-56%" | "blue-gray-500-64%" | "blue-gray-500-72%" | "blue-gray-500-80%" | "blue-gray-500-88%" | "blue-gray-500-96%" |
"light-blue-500-8%" | "light-blue-500-16%" | "light-blue-500-24%" | "light-blue-500-32%" | "light-blue-500-40%" | "light-blue-500-48%" |
"light-blue-500-56%" | "light-blue-500-64%" | "light-blue-500-72%" | "light-blue-500-80%" | "light-blue-500-88%" | "light-blue-500-96%" |
"blue-500-8%" | "blue-500-16%" | "blue-500-24%" | "blue-500-32%" | "blue-500-40%" | "blue-500-48%" |
"blue-500-56%" | "blue-500-64%" | "blue-500-72%" | "blue-500-80%" | "blue-500-88%" | "blue-500-96%" |
"indigo-500-8%" | "indigo-500-16%" | "indigo-500-24%" | "indigo-500-32%" | "indigo-500-40%" | "indigo-500-48%" |
"indigo-500-56%" | "indigo-500-64%" | "indigo-500-72%" | "indigo-500-80%" | "indigo-500-88%" | "indigo-500-96%" |
"purple-500-8%" | "purple-500-16%" | "purple-500-24%" | "purple-500-32%" | "purple-500-40%" | "purple-500-48%" |
"purple-500-56%" | "purple-500-64%" | "purple-500-72%" | "purple-500-80%" | "purple-500-88%" | "purple-500-96%" |
"pink-500-8%" | "pink-500-16%" | "pink-500-24%" | "pink-500-32%" | "pink-500-40%" | "pink-500-48%" |
"pink-500-56%" | "pink-500-64%" | "pink-500-72%" | "pink-500-80%" | "pink-500-88%" | "pink-500-96%" |
"rose-500-8%" | "rose-500-16%" | "rose-500-24%" | "rose-500-32%" | "rose-500-40%" | "rose-500-48%" |
"rose-500-56%" | "rose-500-64%" | "rose-500-72%" | "rose-500-80%" | "rose-500-88%" | "rose-500-96%" |
"orange-500-8%" | "orange-500-16%" | "orange-500-24%" | "orange-500-32%" | "orange-500-40%" | "orange-500-48%" |
"orange-500-56%" | "orange-500-64%" | "orange-500-72%" | "orange-500-80%" | "orange-500-88%" | "orange-500-96%"
, string>;

export const palette = {
  ...defaultPalette,
  ...transparentPalette,
}