import clsx from "clsx";
import React, {forwardRef, memo, useMemo} from "react"
import {twMerge} from "tailwind-merge"

export type TextProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
  appearance?: "default" | "hint" | "disabled"
}

export const Text: React.FunctionComponent<TextProps> = memo(forwardRef<HTMLSpanElement, TextProps>(({
  appearance = "default",
  ...rest
}, ref) => {
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
    <span ref={ref} {...rest} className={className}/>
  )
}))

Text.displayName = "Text";