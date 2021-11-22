import { NextApiHandler } from 'next'
import { getRecentShows, Show } from '../../../services/trakt'

const handler: NextApiHandler<Show[]> = async (_req, res) => {
  const shows = await getRecentShows()

  res.status(200).send(shows.slice(0, 6))
}

export default handler
