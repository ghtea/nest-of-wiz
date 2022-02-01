
import {StyledIconProps, StyledIcon} from "@styled-icons/styled-icon"
import clsx from "clsx";
import {forwardRef, memo, useMemo} from "react";
import {twMerge} from "tailwind-merge";
import {EvaIcon} from "./eva";

export type IconProp = Omit<StyledIconProps, "color"> & {
  name: IconName
  color?: IconColor
  appearance?: "solid" | "outlined"
  size?: IconSize
}

export type IconName = keyof typeof EvaIcon
export type IconSize = "sm" | "md" | "lg" | number;
export type IconColor = "default" | "hint" | "disabled"

export const Icon: React.FunctionComponent<IconProp> = memo(forwardRef<SVGSVGElement, IconProp>(({
  name,
  color,
  appearance = "outlined",
  size = "md",
  className,
  ...rest
}, ref) => {
  const colorClassName = useMemo(()=>{
    if (color === "disabled"){
      return clsx("fill-zinc-300 dark:fill-zinc-500")
    } else if (color === "hint"){
      return clsx("fill-zinc-500 dark:fill-zinc-400")
    } else {
      return clsx("fill-zinc-900 dark:fill-zinc-300")
    }
  },[color])

  const finalClassName = useMemo(()=>twMerge(
    clsx(colorClassName, className)
  ),[className, colorClassName])
  
  const finalSize = useMemo(()=>{
    if (size === "sm") return 16
    else if (size === "md") return 24
    else if (size === "lg") return 36
    else return size
  },[size])

  const RawIcon: StyledIcon | null = useMemo(()=> {
    return EvaIcon[name] && EvaIcon[name][appearance] ? EvaIcon[name][appearance] : null
  }, [name, appearance])

  const StyledIcon = useMemo(()=>{
    return (RawIcon === null 
      ? null
      : RawIcon
    )
  },[RawIcon])

  return (
    <>
      {
        StyledIcon === null 
          ? null
          : <StyledIcon ref={ref} className={finalClassName} size={finalSize} {...rest}/>
      }
    </>
  )
}))

Icon.displayName = "Icon"

