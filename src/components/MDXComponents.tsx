import React, { FC } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { Anchor } from './Anchor'

const Image: FC<ImageProps> = props => {
  return <NextImage className="rounded-md border" {...props} />
}

export const MDXComponents = {
  a: Anchor,
  Image
}
