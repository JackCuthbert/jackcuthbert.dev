import React, { FC } from 'react'
import Link from 'next/link'
import NextImage, { ImageProps } from 'next/image'
import type { AnchorProps } from '../types'

const Anchor: FC<AnchorProps> = props => {
  const { href } = props
  const isInternalLink =
    href != null && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className="text-blue-500" {...props}>
          {props.children}
        </a>
      </Link>
    )
  }

  return (
    <a
      target="_blank"
      className="text-blue-500"
      rel="noopener noreferrer"
      {...props}
    />
  )
}

const Image: FC<ImageProps> = props => {
  return <NextImage className="rounded-md border" {...props} />
}

export const MDXComponents = {
  a: Anchor,
  Image
}
