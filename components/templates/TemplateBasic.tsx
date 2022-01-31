import React, {useCallback, useMemo} from "react"
import {Flex, Text,Link} from "components/atoms"
import {ThemeSetting, useThemeContext} from "styles/theme"

export type TemplateBasicProps = {}

export const TemplateBasic: React.FunctionComponent = ({
  children
}) => {
  const theme = useThemeContext()

  const handleThemeSwitchClick = useCallback(()=>{
    if (theme.setting === ThemeSetting.FIXED_LIGHT){
      theme.setSetting(ThemeSetting.FIXED_DARK)
    }
    else if (theme.setting === ThemeSetting.FIXED_DARK){
      theme.setSetting(ThemeSetting.AUTO)
    }
    else {
      theme.setSetting(ThemeSetting.FIXED_LIGHT)
    }
  },[theme])

  const themeSettingName = useMemo(()=>{
    if (theme.setting === ThemeSetting.FIXED_LIGHT){
      return "light"
    }
    else if (theme.setting === ThemeSetting.FIXED_DARK){
      return "dark"
    }
    else {
      return "auto"
    }
  },[theme.setting])

  return (
    <Flex className="w-screen h-auto min-h-screen bg-zinc-50 dark:bg-black" >
      <Flex className="fixed flex-row justify-between items-center py-2 px-4 w-screen h-12 bg-white/20 dark:bg-zinc-900/20 border-b border-zinc-200 dark:border-zinc-700 border-solid backdrop-blur">
        <Link href={"/"}><Text className="font-bold cursor-pointer">nest of wiz</Text></Link>
        <Flex className="flex-row w-auto font-medium cursor-pointer" onClick={handleThemeSwitchClick}>{themeSettingName}</Flex>
      </Flex>
      <Flex className="pt-12">
        <Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}