import React from 'react'
import { ExternalLink } from './ExternalLink'

// TODO: This is a bit of a mess, definitely needs cleaning up or an API integration

function getGitHubUrl(slug: string): string {
  return (
    `https://github.com/JackCuthbert/jackcuthbert.dev/tree/main/content/blog/` +
    slug +
    `.mdx`
  )
}

interface Props {
  slug: string
}

export function OldPostPanel({ slug }: Props): JSX.Element {
  return (
    <div className="flex space-x-4 items-center bg-gray-100 text-gray-700 p-6 rounded-lg border border-gray-300">
      <p className="text-xl">🧹</p>
      <p>
        This post is over 1 year old and may be out of date or no longer
        relevant. If you find any problems with this post you can let me know by{' '}
        <ExternalLink
          className="font-bold underline"
          href="https://github.com/JackCuthbert/jackcuthbert.dev/issues/new"
        >
          submitting an issue
        </ExternalLink>{' '}
        or{' '}
        <ExternalLink className="font-bold underline" href={getGitHubUrl(slug)}>
          editing this page
        </ExternalLink>
        .
      </p>
    </div>
  )
}
