import { NextApiHandler } from 'next'
import { getTopTracks, TopTrack } from '../../../services/last-fm'

export type TopTracksResponse = TopTrack[]

const handler: NextApiHandler<TopTracksResponse> = async (_req, res) => {
  res.send(await getTopTracks(10))
}

export default handler
