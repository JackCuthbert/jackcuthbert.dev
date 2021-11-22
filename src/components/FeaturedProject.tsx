import Image from 'next/image'
import React from 'react'
import { MagicHover } from './MagicHover'

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
    <MagicHover depth="deep" href={href} className="p-4 rounded-lg">
      <Image src={imageSrc} alt={`${name} icon`} width={42} height={42} />
      <h3 className="font-bold">
        {name} <span className="text-gray-400 font-normal">{year}</span>
      </h3>
      <p>{description}</p>
    </MagicHover>
  )
}
