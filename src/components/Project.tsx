import React from 'react'
import { CustomLink } from './CustomLink'

interface Props {
  name: string
  summary: string
  url: string
}

export function Project({ name, summary, url }: Props): JSX.Element {
  return (
    <div className="sm:flex sm:space-x-4 sm:justify-between sm:items-center">
      <CustomLink
        className="font-bold text-black mb-1 sm:m-0 hover:bg-black hover:text-white"
        href={url}
        target="_blank"
      >
        {name} 🡵
      </CustomLink>
      <p className="font-italic sm:text-sm">{summary}</p>
    </div>
  )
}
