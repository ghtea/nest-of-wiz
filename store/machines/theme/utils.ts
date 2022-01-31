import {send} from "xstate";

export const handleBrowserDarkSchemeChange = (event: MediaQueryListEvent) => {
  if (event.matches) {
    send("AUTOMATE_LIGHT")
  } else {
    send("AUTOMATE_DARK")
  }
}