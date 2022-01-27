import clsx from "clsx";
import React, {memo, useMemo} from "react"
import {twMerge} from "tailwind-merge"

export type TextProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  appearance?: "default" | "hint" | "disabled"
}

export const Text: React.FunctionComponent<TextProps> = memo(({
  appearance = "default",
  ...rest
}) => {
  const appearanceClassName = useMemo(()=>{
    if (appearance === "hint"){
      return clsx("text-gray-700")
    } else if (appearance === "disabled"){
      return clsx("text-gray-400")
    } else {
      return ""
    }
  },[appearance])

  const className = useMemo(()=>twMerge(
    clsx(appearanceClassName, "w-auto"
    ), rest.className
  ),[rest.className, appearanceClassName])

  return (
    <span {...rest} className={className}/>
  )
})

Text.displayName = "Text";