import React from 'react'

interface Props {
  name: string
  summary: string
  url: string
}

export function MinorProject({ name, summary, url }: Props): JSX.Element {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex space-x-4">
      <a
        className="font-bold text-blue-500 hover:underline"
        href={url}
        target="_blank"
        rel="noopener"
      >
        {name}
      </a>
      <p>{summary}</p>
    </div>
  )
}
