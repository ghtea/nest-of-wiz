import {palette} from "./palette";

export enum ColorKey {
  // default 
  // https://theme-ui.com/theme-spec#color
  "bg" = "background",
  "text" = "text",

  "primary" = "primary",
  "secondary" = "secondary",
  "accent" = "accent",
  "highlight" = "highlight",
  "muted" = "muted",
  
  "text.hint" = "text-hint",
  "text.disabled" = "text-disabled",
  "text.alternative" = "text-alternative",
  
  // [atom/molecule/organism].[./focus/].[text/bg/border/icon/shadow]
  "image.placeholder.bg" = "image-placeholder-bg",

  "modal.bg" = "modal-bg",
  "modal.border" = "modal-border",
  "modal.header.bg" = "modal-header-bg",
  "modal.background.bg" = "modal-background-bg",
}

type Colors = Record<ColorKey, typeof palette[keyof (typeof palette)] | "transparent">;

export const lightModeColors: Colors = {
  // default
  [ColorKey.bg] : palette["white"],
  [ColorKey.text]: palette["gray-700"],

  [ColorKey.primary]: palette["primary-500"],
  // don't use, it's just needed as default
  [ColorKey.secondary]: palette["primary-500"],
  [ColorKey.accent]: palette["primary-500"],
  [ColorKey.highlight]: palette["primary-500"],
  [ColorKey.muted]: palette["primary-500"],

  [ColorKey["text.hint"]]: palette["gray-500"],
  [ColorKey["text.disabled"]]: palette["gray-200"],
  [ColorKey["text.alternative"]]: palette["white"],

  // components
  [ColorKey["image.placeholder.bg"]]: palette["gray-100"],

  [ColorKey["modal.bg"]] : palette["white"],
  [ColorKey["modal.border"]] : palette["gray-200"],
  [ColorKey["modal.header.bg"]] : palette["gray-50"],
  [ColorKey["modal.background.bg"]] : palette["gray-500-48%"],
};
