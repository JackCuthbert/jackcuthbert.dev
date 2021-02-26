import React from 'react'
import Image from 'next/image'

const tagConfig = {
  typescript: {
    bg: 'bg-blue-600',
    fg: 'text-white',
    name: 'TypeScript'
  },
  openSource: {
    bg: 'bg-gray-900',
    fg: 'text-white',
    name: 'Open Source'
  },
  googleCloud: {
    bg: 'bg-green-600',
    fg: 'text-white',
    name: 'Google Cloud'
  },
  mlAi: {
    bg: 'bg-yellow-600',
    fg: 'text-white',
    name: 'ML / AI'
  }
}

type Tag = keyof typeof tagConfig

interface Props {
  // icon: string TODO
  name: string
  summary: string
  postUrl?: string
  url: string
  tags: Tag[]
  icon: string
}

export function MajorProject({
  name,
  summary,
  postUrl,
  url,
  icon,
  tags
}: Props): JSX.Element {
  return (
    <div className="bg-white border border-black p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <Image src={icon} layout="fixed" width={24} height={24} />
          <h3 className="font-bold text-lg">{name}</h3>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="text-black font-mono font-semibold hover:bg-black hover:text-white"
        >
          View 🡵
        </a>
      </div>
      <div className="mb-4 flex space-x-1">
        {tags
          .sort((a, b) => (a > b ? 1 : -1))
          .map(tag => tagConfig[tag])
          .map(tag => (
            <span
              key={`MajorProject-${name}-Tag-${tag.name}`}
              className={`text-xs py-1 px-2 ${tag.bg} ${tag.fg}`}
            >
              {tag.name}
            </span>
          ))}
      </div>
      <p className="text-gray-700 mb-3">{summary}</p>
      {postUrl !== undefined && (
        <div className="flex space-x-2">
          <a
            href={postUrl}
            className="text-black font-mono font-semibold hover:bg-black hover:text-white"
          >
            Read blog post
          </a>
        </div>
      )}
    </div>
  )
}
