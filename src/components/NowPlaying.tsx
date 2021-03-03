import React from 'react'
import useSWR from 'swr'
import cntl from 'cntl'
import { CustomLink } from './CustomLink'
import type { Response } from '../pages/api/now-playing'

const trackWrapCN = cntl`
  py-1
  px-2
  rounded-sm

  border
  border-gray-200
  bg-white

  transition
  group

  hover:bg-red-50
  hover:border-red-300
  hover:shadow
`

const trackCN = cntl`
  text-sm
  font-semibold

  transition
  group-hover:text-red-900
`

const arrowCN = cntl`
  text-gray-500

  transition
  group-hover:text-red-500
`

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
        className={trackWrapCN}
        title="view on Last.fm"
      >
        <span className={trackCN}>
          {data?.artist} – {data?.title}
        </span>{' '}
        <span className={arrowCN}>🡥</span>
      </CustomLink>
    </p>
  )
}
