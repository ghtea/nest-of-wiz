

import React, {
  createContext,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {getLocalStorage, removeLocalStorage, setLocalStorage} from "utils/others/localStorage";

export enum ThemeSetting {
  FIXED_LIGHT = "fixed-light",
  FIXED_DARK = "fixed-dark",
  AUTO = "auto"
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeContext = {
  name:  Theme
  setting: ThemeSetting
  setSetting: React.Dispatch<React.SetStateAction<ThemeSetting>>
};

export const ThemeContext = createContext<ThemeContext>({
  name: Theme.LIGHT,
  setting: ThemeSetting.AUTO,
  setSetting: (value: SetStateAction<ThemeSetting>) => {}
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeProvider: FunctionComponent = (props) => {
  
  const [themeSetting, setThemeSetting] = useState<ThemeSetting>(ThemeSetting.AUTO);
  const [isBrowserDarkMode, setIsBrowserDarkMode] = useState(false)

  const theme = useMemo(()=>{
    if (themeSetting === ThemeSetting.FIXED_LIGHT){
      return Theme.LIGHT
    }
    else if (themeSetting === ThemeSetting.FIXED_DARK){
      return Theme.DARK
    }
    else {
      return isBrowserDarkMode ? Theme.DARK  : Theme.LIGHT
    }
  },[isBrowserDarkMode, themeSetting])

  const handleBrowserDarkSchemeChange = useCallback((event: MediaQueryListEvent)=>{
    if (event.matches) {
      setIsBrowserDarkMode(true)
    } else {
      setIsBrowserDarkMode(false)
    }
  },[])
  
  const init = useCallback(()=>{
    const localStorageTheme = getLocalStorage("theme-setting");
    if (localStorageTheme){
      if (localStorageTheme === "fixed-light"){
        setThemeSetting(ThemeSetting.FIXED_LIGHT)
      } else if (localStorageTheme === "fixed-dark"){
        setThemeSetting(ThemeSetting.FIXED_DARK)
      } 
    }
    
    const darkThemeMediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMediaQueryList.matches){
      setIsBrowserDarkMode(true)
    } else {
      setIsBrowserDarkMode(false)
    }
    darkThemeMediaQueryList.addEventListener("change", handleBrowserDarkSchemeChange)

    return (()=>{
      darkThemeMediaQueryList.removeEventListener("change", handleBrowserDarkSchemeChange)
    })
  },[handleBrowserDarkSchemeChange])

  useEffect(()=>{
    init()
  }, [init])


  // add/remove dark class for tailwindcss
  useEffect(()=>{
    if (theme === Theme.LIGHT){
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  },[theme])

  useEffect(()=>{
    if (themeSetting === ThemeSetting.FIXED_DARK){
      setLocalStorage("theme-setting", "fixed-dark")
    } else if (themeSetting === ThemeSetting.FIXED_LIGHT){
      setLocalStorage("theme-setting", "fixed-light")
    } else {
      removeLocalStorage("theme-setting")
    }
  },[themeSetting])

  const value = useMemo(()=>{
    return ({
      name: theme,
      setting: themeSetting,
      setSetting: setThemeSetting
    })
  },[theme, themeSetting])

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
