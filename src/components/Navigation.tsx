import Image from 'next/image'
import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const activeClass = 'font-bold'
const sharedClass = 'inline-block px-3 py-2 rounded-md transition-all transform'
const hoverClass = 'hover:bg-white hover:shadow-md group-hover:-translate-y-0.5'

const NavItem: FC<{ href: string; className?: string }> = ({
  href,
  children,
  ...props
}) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <div className="inline-block group">
      <span className={isActive ? `font-bold` : 'font-normal'}>
        <Link href={href} {...props}>
          <a
            className={
              isActive
                ? `cursor-default ${sharedClass} ${activeClass}`
                : `${hoverClass} ${sharedClass}`
            }
          >
            {children}
          </a>
        </Link>
      </span>
    </div>
  )
}

export function Navigation(): JSX.Element {
  return (
    <nav className="flex items-center space-x-4 mt-4 mb-16">
      <Link href="/">
        <a>
          <Image
            src="/images/avatar.jpg"
            alt="A photo of Jack Cuthbert"
            width={32}
            height={32}
            className="rounded-full"
          />
        </a>
      </Link>
      <div>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/notes">Notes</NavItem>
        <NavItem href="/uses">Uses</NavItem>
      </div>
    </nav>
  )
}
