import Image from 'next/image'
import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { constrainWidthClass } from '../layouts/StandardLayout'
import { MagicHover } from './MagicHover'
import type { AnchorProps } from '../types'

const NavItem: FC<AnchorProps> = ({ href, children, ...props }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <MagicHover
      href={href}
      className={`py-2 px-3 rounded-md ${
        isActive ? 'font-bold !translate-y-0 !bg-transparent !shadow-none' : ''
      }`}
      {...props}
    >
      {children}
    </MagicHover>
  )
}

const Background: FC = ({ children }) => (
  <nav className="flex items-center space-x-4 mb-8 sm:mb-12 py-2 bg-gray-50 bg-opacity-90 backdrop-filter backdrop-blur-sm">
    {children}
  </nav>
)

export function Navigation(): JSX.Element {
  return (
    <div className={`${constrainWidthClass} sticky top-0 z-50`}>
      <Background>
        <Link href="/">
          <a className="inline-flex items-center">
            <Image
              src="/header-logo.png"
              alt="Jack Cuthbert's multi-colour logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </a>
        </Link>
        <div className="flex space-x-2">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/notes">Notes</NavItem>
          <NavItem href="/uses">Uses</NavItem>
        </div>
      </Background>
    </div>
  )
}
