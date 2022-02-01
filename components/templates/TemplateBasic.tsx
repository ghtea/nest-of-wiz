import React, {useCallback, useMemo} from "react"
import {Flex, Text,Link, Icon, Box} from "components/atoms"
import {ThemeName, ThemeSetting, useThemeContext} from "styles/theme"

const ThemeSettingIcon: React.FunctionComponent<{setting: ThemeSetting, name: ThemeName}> = ({
  setting,
  name
})=>{
  return (<>
    {setting === ThemeSetting.FIXED_LIGHT && <Icon name={"Sun"}/>}
    {setting === ThemeSetting.FIXED_DARK && <Icon name={"Moon"}/>}
    {setting === ThemeSetting.AUTO && name === ThemeName.LIGHT && (
      <Flex className="flex-row">
        <Icon name={"Sun"} size={24}/>
        <Box className="ml-1">
          <Icon name={"Moon"} size={12}/>
        </Box>
      </Flex>
    ) }
    {setting === ThemeSetting.AUTO && name === ThemeName.DARK && (
      <Flex className="flex-row">
        <Icon name={"Moon"} size={24}/>
        <Box className="ml-1">
          <Icon name={"Sun"} size={12}/>
        </Box>
      </Flex>
    ) }
  </>)
}

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

  return (
    <Flex className="w-screen h-auto min-h-screen bg-zinc-50 dark:bg-black" >
      <Flex className="fixed z-10 flex-row justify-between items-center py-2 px-4 w-screen h-12 bg-white/20 dark:bg-zinc-900/20 border-b border-zinc-200 dark:border-zinc-700 border-solid backdrop-blur">
        <Link href={"/"}><Text className="font-bold cursor-pointer ">nest of wiz</Text></Link>
        <Flex className="flex-row w-auto font-medium cursor-pointer" onClick={handleThemeSwitchClick}>
          <ThemeSettingIcon setting={theme.setting} name={theme.name}/>
        </Flex>
      </Flex>
      <Flex className="pt-12">
        <Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}