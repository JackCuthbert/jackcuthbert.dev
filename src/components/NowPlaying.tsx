import React from 'react'
import useSWR from 'swr'
import { CustomLink } from './CustomLink'
import type { Response } from '../pages/api/now-playing'

export function NowPlaying(): JSX.Element {
  const { data, isValidating } = useSWR<Response>('/api/now-playing')

  if (data === undefined && isValidating) {
    return (
      <p className="text-sm">
        <span className="text-gray-500 mr-2">🎵 ...</span>
      </p>
    )
  }

  return (
    <p className="text-sm">
      <span className="text-gray-500 mr-2">
        🎵{' '}
        {data?.nowPlaying !== undefined && data.nowPlaying
          ? 'Now playing'
          : 'Last played'}
      </span>
      <CustomLink
        href="https://last.fm/user/jckcthbrt"
        className="row-start-2 col-start-1 text-black mb-1 sm:m-0 hover:bg-black hover:text-white"
        title="view on Last.fm"
      >
        {data?.artist} – {data?.title} 🡥
      </CustomLink>
    </p>
  )
}
