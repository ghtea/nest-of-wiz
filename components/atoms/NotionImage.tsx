import NextImage, {ImageProps as NextImageProps} from "next/image";
import {forwardRef} from "react";

export type NotionImageProps = {
  src: NextImageProps["src"]
  alt: NextImageProps["alt"]
  height: NextImageProps["height"]
  width: NextImageProps["width"]
  className: NextImageProps["className"]
  loading: NextImageProps["loading"]
  decoding: NextImageProps["decoding"]
  onLoad: NextImageProps["onLoad"]
  style: HTMLElement["style"] // TODO: check
}

export const NotionImage: React.FunctionComponent<NotionImageProps> = forwardRef<HTMLImageElement, NotionImageProps>(({
  style,
  ...rest
}, ref) => { // TODO: check how to deal ref
  return (
    <NextImage {...rest}/>
  )
})

NotionImage.displayName="NotionImage"