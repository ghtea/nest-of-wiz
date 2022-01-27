import clsx from "clsx";
import React, {memo, useMemo} from "react"
import {twMerge} from "tailwind-merge"
export type FlexProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {}

export const Flex: React.FunctionComponent<FlexProps> = memo(({
  ...rest
}) => {
  const className = useMemo(()=>twMerge(
    clsx("flex flex-col justify-start items-center w-full"), rest.className
  ),[rest.className])

  return (
    <div {...rest} className={className}/>
  )
})

Flex.displayName = "Flex";

