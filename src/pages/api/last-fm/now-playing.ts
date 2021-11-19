import { NextApiHandler } from 'next'
import { getRecentTracks } from '../../../services/last-fm'

export interface NowPlayingResponse {
  artist: string
  name: string
  url: string
}

const handler: NextApiHandler<NowPlayingResponse> = async (_req, res) => {
  try {
    const tracks = await getRecentTracks()
    const nowPlaying = tracks.find(track => track.nowPlaying)

    if (nowPlaying == null) {
      res.status(204).end()
      return
    }

    res.status(200).send({
      artist: nowPlaying.artist,
      name: nowPlaying.name,
      url: nowPlaying.url
    })
  } catch (error) {
    res.status(500).end()
  }
}

export default handler
