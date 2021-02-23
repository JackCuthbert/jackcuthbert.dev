import React from 'react'

export function Footer(): JSX.Element {
  return (
    <p className="">
      Content on <a href="/blog">blog</a> pages use the{' '}
      <a
        href="https://creativecommons.org/licenses/by-sa/2.0/"
        rel="noopener noreferrer"
      >
        CC-BY-SA
      </a>{' '}
      license. The{' '}
      <a
        href="https://gitlab.com/JackCuthbert/jackcuthbert.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        source code
      </a>{' '}
      and <a href="/notes">notes</a> use the{' '}
      <a
        target="_blank"
        href="https://opensource.org/licenses/MIT"
        rel="noopener noreferrer"
      >
        MIT
      </a>{' '}
      license. Unsure? Mention me on{' '}
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://md.jckcthbrt.io/@jack"
      >
        Mastodon
      </a>
      .
    </p>
  )
}
