import React, { FC } from 'react'
import { AnchorProps } from '../types'
import { ExternalLink } from './ExternalLink'
import useSWR from 'swr'
import { NowPlayingResponse } from '../pages/api/last-fm/now-playing'

const DullExternalLink: FC<AnchorProps> = ({ ...props }) => (
  <ExternalLink
    className="inline-block font-bold text-blue-500 underline"
    {...props}
  />
)

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

          <DullExternalLink href="https://www.last.fm/user/jckcthbrt/library">
            Show history
          </DullExternalLink>
        </>
      )}

      {data != null && (
        <>
          <span className="text-gray-600">🎧 Now playing</span>
          <DullExternalLink href={data.url}>
            {data.artist} - {data.name}{' '}
          </DullExternalLink>
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
