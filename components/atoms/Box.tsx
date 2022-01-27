import clsx from "clsx";
import React, {memo, useMemo} from "react"
import {twMerge} from "tailwind-merge"

export type BoxProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {}

export const Box: React.FunctionComponent<BoxProps> = memo(({
  ...rest
}) => {
  const className = useMemo(()=>twMerge(
    clsx("w-auto"), rest.className
  ),[rest.className])

  return (
    <div {...rest} className={className}/>
  )
})

Box.displayName = "Box";