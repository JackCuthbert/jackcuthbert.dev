import React, { FC } from 'react'
import Link from 'next/link'
import type { AnchorProps } from '../types'

export const anchorColor = 'text-blue-600'
export const anchorClass = `${anchorColor} hover:underline`

export const Anchor: FC<AnchorProps> = ({ className, ...props }) => {
  const { href } = props
  const isInternalLink =
    href != null && (href.startsWith('/') || href?.startsWith('#'))
  const cn = className ?? anchorClass

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={cn} {...props} />
      </Link>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" className={cn} {...props} />
  )
}
