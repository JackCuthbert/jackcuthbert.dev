const USERNAME = process.env.LASTFM_USERNAME ?? 'jckcthbrt'
const API_KEY = process.env.LASTFM_API_KEY ?? ''
const API_URL = 'http://ws.audioscrobbler.com/2.0'

/** @private */
async function toJson(res: Response): Promise<any> {
  return await res.json()
}

/** @private */
function buildUrl(
  method: string,
  additionalArgs?: Record<string, string | number>
): string {
  let endpoint = `/?method=${method}&user=${USERNAME}&api_key=${API_KEY}&format=json`
  if (additionalArgs == null) {
    return endpoint
  }

  const args = Object.entries(additionalArgs).map(
    ([key, value]) => `${key}=${value}`
  )
  if (args.length > 0) {
    endpoint += `&${args.join('&')}`
  }

  return endpoint
}

export interface RecentTrack {
  nowPlaying: boolean
  artist: string
  name: string
  url: string
}

export async function getRecentTracks(): Promise<RecentTrack[]> {
  const endpoint = buildUrl('user.getrecenttracks')
  return await fetch(API_URL + endpoint)
    .then(toJson)
    .then(res => res.recenttracks.track)
    .then(tracks =>
      tracks.map(track => ({
        artist: track.artist['#text'],
        name: track.name,
        nowPlaying: track['@attr']?.nowplaying === 'true',
        url: track.url
      }))
    )
}

export interface TopTrack {
  artist: string
  artistUrl: string
  name: string
  url: string
  playCount: number
  rank: number
}

export async function getTopTracks(limit = 50): Promise<TopTrack[]> {
  if (limit > 50) throw Error('getTopTracks may only return up to 50 tracks')

  const endpoint = buildUrl('user.gettoptracks', { limit, period: '1month' })
  return await fetch(API_URL + endpoint)
    .then(toJson)
    .then(res => res.toptracks.track)
    .then(tracks =>
      tracks.map(track => ({
        artist: track.artist.name,
        artistUrl: track.artist.url,
        name: track.name,
        url: track.url,
        playCount: Number(track.playcount),
        rank: Number(track['@attr'].rank)
      }))
    )
}
