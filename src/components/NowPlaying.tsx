import React from 'react'
import useSWR from 'swr'
import { CustomLink } from './CustomLink'
import type { Response } from '../pages/api/now-playing'

const hoverCN = [
  'border',
  'border-transparent',
  'bg-gray-100',
  'hover:bg-gray-200',
  'hover:border-gray-400',
  'transition'
].join(' ')

export function NowPlaying(): JSX.Element {
  const { data, isValidating } = useSWR<Response>('/api/now-playing', {
    refreshInterval: 60000 // 1 minute
  })

  if (data === undefined && isValidating) {
    return (
      <p className="text-sm">
        <span className="text-gray-500 mr-2">🎵 ...</span>
      </p>
    )
  }

  return (
    <p className="flex items-center space-x-1">
      <span>🎵</span>
      <span className="text-gray-500">
        {data?.nowPlaying !== undefined && data.nowPlaying
          ? 'Now playing'
          : 'Last played'}
      </span>
      <CustomLink
        href="https://last.fm/user/jckcthbrt"
        className={`py-1 px-2 rounded-sm ${hoverCN}`}
        title="view on Last.fm"
      >
        {data?.artist} – {data?.title} <span className="text-gray-500">🡥</span>
      </CustomLink>
    </p>
  )
}
