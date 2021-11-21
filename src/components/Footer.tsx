import React from 'react'
import useSWR from 'swr'
import { Anchor } from './Anchor'
import { NowPlayingResponse } from '../pages/api/last-fm/now-playing'

/** Time in minutes to make another request */
const REFRESH_INTERVAL = 5

async function fetchNowPlaying(): Promise<NowPlayingResponse> {
  const res = await fetch('/api/last-fm/now-playing')
  return await res.json()
}

function NowPlaying(): JSX.Element | null {
  const { data } = useSWR('/api/last-fm/now-playing', fetchNowPlaying, {
    refreshInterval: REFRESH_INTERVAL * 60 * 1000,
    revalidateOnFocus: false
  })

  return (
    <p className="flex h-8 items-center space-x-2 text-sm">
      {data == null && (
        <>
          <span className="text-gray-600">🎧 Nothing playing</span>

          <Anchor href="https://www.last.fm/user/jckcthbrt/library">
            Show history
          </Anchor>
        </>
      )}

      {data != null && (
        <>
          <span className="text-gray-600">🎧 Now playing</span>
          <Anchor href={data.url}>
            {data.artist} - {data.name}{' '}
          </Anchor>
        </>
      )}
    </p>
  )
}

export function Footer(): JSX.Element {
  return (
    <div className="pt-8 border-t-2">
      <NowPlaying />
    </div>
  )
}
