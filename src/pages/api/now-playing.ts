import { NextApiRequest, NextApiResponse } from 'next'

const username = 'jckcthbrt'
const key = process.env.LASTFM_API_KEY ?? ''
const apiUrl = 'http://ws.audioscrobbler.com/2.0'

export interface Response {
  nowPlaying: boolean
  title: string
  artist: string
}

async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Response>
): Promise<void> {
  const endpoint = `/?method=user.getrecenttracks&user=${username}&api_key=${key}&format=json`
  const result = await fetch(apiUrl + endpoint)
    .then(async res => await res.json())
    .then(res => res.recenttracks?.track)

  const track = result[0]

  return res.send({
    nowPlaying: track['@attr']?.nowplaying === 'true',
    title: track.name,
    artist: track.artist['#text']
  })
}

export default handler
