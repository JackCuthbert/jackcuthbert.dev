import React, { FC } from 'react'
import { AnchorProps } from '../types'

interface Props extends AnchorProps {
  depth?: 'shallow' | 'deep'
}

export const MagicHover: FC<Props> = ({
  children,
  className = '',
  depth = 'shallow',
  ...props
}) => {
  const depthClassname =
    depth === 'shallow'
      ? 'group-hover:-translate-y-0.5'
      : 'group-hover:-translate-y-1'

  return (
    <a className="group cursor-pointer" {...props}>
      <div
        className={`transform transition-all group-hover:bg-white group-hover:shadow-md ${depthClassname} ${className}`}
      >
        {children}
      </div>
    </a>
  )
}
