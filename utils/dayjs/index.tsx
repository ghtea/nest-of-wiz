import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import "dayjs/locale/ko"
import {createContext, useContext, useMemo} from "react"

type DayJsContextType = typeof dayjs

export const DayJsContext = createContext<DayJsContextType>(dayjs)

export const useDayJsContext = () => {
  return useContext(DayJsContext);
};

export const DayJsProvider: React.FunctionComponent = ({
  children
}) => {
  const value = useMemo(()=>{
    dayjs.locale("ko")
    dayjs.extend(localizedFormat)
    return dayjs
  },[])

  return (
    <DayJsContext.Provider value={value}>
      {children}
    </DayJsContext.Provider>
  )
}