import {createMachine, send} from "xstate";
import {handleBrowserDarkSchemeChange} from "./utils";
import {getLocalStorage, removeLocalStorage, setLocalStorage} from "utils/others/localStorage";

export type ThemeXStateContext = {
  theme: "dark" | "light";
}

export const themeXStateMachine = createMachine<ThemeXStateContext>({
  id: "theme",
  initial: "automatedLight",
  states: {
    fixedLight: {
      entry: ["removeDarkClassName", "setLightLocalStorage"],
    },
    fixedDark: {
      entry: ["addDarkClassName", "setDarkLocalStorage"],
    },
    automatedLight: {
      entry: ["removeDarkClassName", "setAutoLocalStorage"],
    },
    automatedDark: {
      entry: ["addDarkClassName", "setAutoLocalStorage"],
    },
  },
  entry: ["init"],
  on: {
    FIX_LIGHT: {target: "fixedLight"},
    FIX_DARK: {target: "fixedDark"},
    AUTOMATE_LIGHT: {target: "automatedLight"},
    AUTOMATE_DARK: {target: "automatedDark"},
  }
},{
  actions: {
    init: (context, event, action) => {
      const localStorageTheme = getLocalStorage("theme");
      const darkThemeMediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
      
      if (localStorageTheme){
        darkThemeMediaQueryList.removeEventListener("change", handleBrowserDarkSchemeChange)
        if (localStorageTheme === "light"){
          send("FIX_LIGHT")
        } else if (localStorageTheme === "dark"){
          send("FIX_DARK")
        } 
      }
      else {
        if (darkThemeMediaQueryList.matches){
          send("AUTOMATE_DARK")
        } else {
          send("AUTOMATE_LIGHT")
        }
        darkThemeMediaQueryList.addEventListener("change", handleBrowserDarkSchemeChange)
      }
    },
    setLightLocalStorage: (context, event, action) => {
      setLocalStorage("theme", "light")
    },
    setDarkLocalStorage: (context, event, action) => {
      setLocalStorage("theme", "dark")
    },
    setAutoLocalStorage: (context, event, action) => {
      removeLocalStorage("theme")
    },
    addDarkClassName: (context, event, action) => {
      document.documentElement.classList.add("dark")
    },
    removeDarkClassName: (context, event, action) => {
      document.documentElement.classList.remove("dark")
    },
  }
});


