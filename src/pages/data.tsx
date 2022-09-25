// TODO: This file is very messy and big. Let's break it down a bit.
import React from 'react'
import Head from 'next/head'
import useSWR, { SWRConfiguration } from 'swr'
import { format } from 'date-fns'
import { WithLayout } from '../types'
import { getStandardLayout } from '../layouts'
import { MagicHover } from '../components/MagicHover'
import { Show, Stats } from '../services/trakt'
import { TopTrack } from '../services/last-fm'
import { NowPlayingResponse } from './api/last-fm/now-playing'
import { Anchor } from '../components/Anchor'

async function fetchShows(): Promise<Show[]> {
  return await fetch('/api/trakt/recent-shows').then(
    async res => await res.json()
  )
}

async function fetchStats(): Promise<Stats> {
  return await fetch('/api/trakt/stats').then(async res => await res.json())
}

async function fetchTopTracks(): Promise<TopTrack[]> {
  return await fetch('/api/last-fm/top-tracks').then(
    async res => await res.json()
  )
}

async function fetchNowPlaying(): Promise<NowPlayingResponse> {
  return await fetch('/api/last-fm/now-playing').then(
    async res => await res.json()
  )
}

const swrConfig: SWRConfiguration = {
  refreshInterval: 1000 * 60 * 5, // 5 minutes
  revalidateOnFocus: false
}

const Data: WithLayout = () => {
  const { data: shows } = useSWR<Show[]>(
    '/api/trakt/recent-shows',
    fetchShows,
    swrConfig
  )
  const { data: stats } = useSWR<Stats>(
    '/api/trakt/stats',
    fetchStats,
    swrConfig
  )
  const { data: tracks } = useSWR<TopTrack[]>(
    '/api/last-fm/top-tracks',
    fetchTopTracks,
    swrConfig
  )
  const { data: nowPlaying } = useSWR(
    '/api/last-fm/now-playing',
    fetchNowPlaying,
    swrConfig
  )

  return (
    <>
      <Head>
        <title>Data · Jack Cuthbert</title>
        <meta property="og:type" content="website" />
        {/* TODO */}
        <meta property="description" content="" />
        <meta property="og:description" content="" />
      </Head>

      <h1 className="font-black text-4xl mb-6">Data</h1>
      <p className="mb-12 border-b pb-8">
        Below you'll find some of the data I've collected over the years via
        various services like Last.fm and Trakt.tv. This page will grow over
        time to include data from GitHub, GitLab, or other productivity services
        I use.
      </p>

      <h2 className="font-bold text-xl mb-6">🎧 Now playing</h2>

      <div className="mb-6">
        <p className="text-3xl">
          {nowPlaying != null ? (
            <>
              <span className="font-black">{nowPlaying?.name}</span>{' '}
              <span className="text-gray-500 font-bold">—</span>{' '}
              <span>{nowPlaying?.artist}</span>
            </>
          ) : (
            <span>Nothing playing</span>
          )}
        </p>
      </div>
      <p className="mb-12 border-b pb-8">
        <Anchor href="https://www.last.fm/user/jckcthbrt">
          Follow me on Last.fm
        </Anchor>
      </p>

      <h2 className="font-bold text-xl mb-6">
        🎼 Top 10 tracks{' '}
        <span className="font-normal text-sm">(last month)</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 -mx-4 mb-6">
        {tracks?.map(track => (
          <MagicHover
            key={track.url}
            href={track.url}
            className="p-4 rounded-lg"
            title={`${String(track.name)} — ${String(track.artist)}`}
          >
            <p className="text-sm text-gray-600">{track.playCount} plays</p>
            <p className="text-3xl mb-1 font-black overflow-hidden whitespace-nowrap overflow-ellipsis">
              {track.name}
            </p>
            <p className="text-sm">{track.artist}</p>
          </MagicHover>
        ))}
      </div>
      <p className="mb-12 border-b pb-8">
        <Anchor href="https://www.last.fm/user/jckcthbrt/listening-report">
          See more stats on Last.fm
        </Anchor>
      </p>

      <h2 className="font-bold text-xl mb-6">
        📺 Watching now{' '}
        <span className="font-normal text-sm">(TV Shows, last 6)</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 -mx-4 mb-12 border-b pb-8">
        {/* TODO: Remove this */}
        {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
        {shows?.map(({ show, last_watched_at }) => (
          <MagicHover
            key={show.ids.trakt}
            href={
              show.ids.imdb != null
                ? `https://www.imdb.com/title/${String(show.ids.imdb)}`
                : '#'
            }
            className="p-4 rounded-md"
          >
            <p className="text-3xl mb-1 font-black overflow-hidden whitespace-nowrap overflow-ellipsis">
              {show.title}{' '}
              <span className="text-gray-600 font-normal text-sm">
                {show.year}
              </span>
            </p>
            <p className="text-sm">
              on {format(new Date(last_watched_at), 'PPPP')}
            </p>
          </MagicHover>
        ))}
      </div>

      <h2 className="font-bold text-xl mb-6">
        🎬 Movie & TV show stats{' '}
        <span className="font-normal text-sm">(all time)</span>
      </h2>

      {stats != null && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
          <div>
            <p className="text-4xl font-black mb-1">{stats.movies.watched}</p>
            <p className="text-sm">Movies</p>
          </div>
          <div>
            <p className="text-4xl font-black mb-1">{stats.shows.watched}</p>
            <p className="text-sm">TV Shows</p>
          </div>
          <div>
            <p className="text-4xl font-black mb-1">{stats.episodes.watched}</p>
            <p className="text-sm">Episodes</p>
          </div>
          <div>
            <p className="text-4xl font-black mb-1">
              {(
                (stats.episodes.minutes + stats.movies.minutes) /
                60 /
                24
              ).toFixed(2)}
            </p>
            <p className="text-sm">Total days</p>
          </div>
        </div>
      )}
    </>
  )
}

Data.getLayout = getStandardLayout

export default Data
