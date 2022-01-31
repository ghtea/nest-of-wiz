import clsx from "clsx";
import React, {forwardRef, memo, Ref, useMemo} from "react"
import {twMerge} from "tailwind-merge"

export type TextProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
  appearance?: "default" | "hint" | "disabled"
  ref?: Ref<HTMLSpanElement>
}

export const Text: React.FunctionComponent<TextProps> = memo(forwardRef<HTMLSpanElement, TextProps>(({
  color = "default",
  ...rest
}, ref) => {
  const colorClassName = useMemo(()=>{
    if (color === "disabled"){
      return clsx("text-color-disabled")
    } else if (color === "hint"){
      return clsx("text-color-hint")
    } else {
      return clsx("text-color-default")
    }
  },[color])

  const className = useMemo(()=>twMerge(
    clsx(colorClassName, "w-auto"
    ), rest.className
  ),[rest.className, colorClassName])

  return (
    <span ref={ref} {...rest} className={className}/>
  )
}))

Text.displayName = "Text";