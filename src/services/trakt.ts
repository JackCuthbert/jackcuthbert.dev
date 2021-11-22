const USERNAME = process.env.TRAKT_USERNAME ?? 'jckcthbrt'
const API_KEY = process.env.TRAKT_CLIENT_ID ?? ''
const API_URL = 'https://api.trakt.tv'

const commonHeaders: HeadersInit = {
  'Content-Type': 'application/json',
  'trakt-api-version': '2',
  'trakt-api-key': API_KEY
}

export interface Show {
  plays: number
  last_watched_at: Date
  last_updated_at: Date
  reset_at: null | any // Unknown
  show: {
    title: string
    year: number
    ids: {
      trakt: number | null
      /**
       * @example
       * 'fire-force'
       */
      slug: string | null
      tvdb: number | null
      /**
       * @example
       * 'tt2560140'
       */
      imdb: string | null
      tmdb: string | null
      tvrage: null | number
    }
  }
}

export async function getRecentShows(limit = 6): Promise<Show[]> {
  const url = API_URL + `/users/${USERNAME}/watched/shows?extended=noseasons`

  return await fetch(url, {
    method: 'GET',
    headers: commonHeaders
  })
    .then(async res => await res.json())
    .then(res => res.slice(0, limit))
}

export interface Stats {
  movies: {
    plays: number
    watched: number
    minutes: number
    collected: number
    ratings: number
    comments: number
  }
  shows: {
    watched: number
    collected: number
    ratings: number
    comments: number
  }
  seasons: {
    ratings: number
    comments: number
  }
  episodes: {
    plays: number
    watched: number
    minutes: number
    collected: number
    ratings: number
    comments: number
  }
  network: {
    friends: number
    followers: number
    following: number
  }
  ratings: {
    total: number
    distribution: {
      '1': number
      '2': number
      '3': number
      '4': number
      '5': number
      '6': number
      '7': number
      '8': number
      '9': number
      '10': number
    }
  }
}

export async function getStats(): Promise<Stats> {
  const url = API_URL + `/users/${USERNAME}/stats`

  return await fetch(url, {
    method: 'GET',
    headers: commonHeaders
  }).then(async res => await res.json())
}
