import React from 'react'

interface Props {
  name: string
  summary: string
  url: string
}

export function MinorProject({ name, summary, url }: Props): JSX.Element {
  return (
    <div className="sm:flex sm:space-x-4 sm:justify-between sm:items-center">
      <a
        className="font-bold text-black mb-1 sm:m-0 hover:bg-black hover:text-white"
        href={url}
        target="_blank"
        rel="noopener"
      >
        {name} 🡵
      </a>
      <p className="font-italic sm:text-sm">{summary}</p>
    </div>
  )
}
