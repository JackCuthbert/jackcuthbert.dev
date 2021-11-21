import Image from 'next/image'
import React from 'react'
import { Anchor } from './Anchor'

interface Props {
  href: string
  imageSrc: string
  name: string
  year: number
  description: string
}

export function FeaturedProject({
  href,
  imageSrc,
  name,
  year,
  description
}: Props): JSX.Element {
  return (
    // TODO: Fix hover on edges
    <Anchor
      href={href}
      className="group transform hover:bg-white p-4 hover:-translate-y-1 transition-all rounded-lg hover:shadow-md"
    >
      <Image src={imageSrc} alt={`${name} icon`} width={42} height={42} />
      <h3 className="font-bold">
        {name} <span className="text-gray-400 font-normal">{year}</span>
      </h3>
      <p>{description}</p>
    </Anchor>
  )
}
