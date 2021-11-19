import React, { FC } from 'react'
import type { AnchorProps } from '../types'

export const ExternalLink: FC<AnchorProps> = ({ href, children, ...props }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {children}
    </a>
  )
}
