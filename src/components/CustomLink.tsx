import React, { FC, DetailedHTMLProps, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

interface Props extends LinkProps {
  href: string
}

export const CustomLink: FC<Props> = props => {
  const { href } = props

  const isInternalLink: boolean =
    href !== undefined && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
