import { NextApiHandler } from 'next'
import { getStats, Stats } from '../../../services/trakt'

const handler: NextApiHandler<Stats> = async (_req, res) => {
  const stats = await getStats()

  res.status(200).send(stats)
}

export default handler
