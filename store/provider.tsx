import {useInterpret} from "@xstate/react";
import React, {createContext, useMemo} from "react";
import {ActorRefFrom, Interpreter} from "xstate";
import {themeXStateMachine} from "./machines/theme";

type XStateContextType = {
  theme: Interpreter<typeof themeXStateMachine> // TODO: I can't find better way
}

// TODO: xstate is not ready
export const XStateContext = createContext({} as XStateContextType);

export const XStateProvider: React.FunctionComponent = ({
  children
}) => {
  const themeXStateService = useInterpret(themeXStateMachine);

  const value = useMemo(()=>{
    return ({
      theme: themeXStateService
    })
  }, [themeXStateService])

  return (
    // @ts-ignore
    <XStateContext.Provider value={value}>
      {children}
    </XStateContext.Provider>
  );
};