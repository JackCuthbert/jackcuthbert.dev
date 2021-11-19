import React from 'react'

// TODO: This is a bit of a mess, definitely needs cleaning up

export function UnderConstructionPanel(): JSX.Element {
  return (
    <div className="flex space-x-4 items-center bg-yellow-100 text-yellow-700 p-6 rounded-lg border border-yellow-300">
      <p className="text-xl">🚧</p>
      <p>
        This page is going to be pretty empty while I continue to migrate (and
        update) all my content to this new site. Please check back later.
      </p>
    </div>
  )
}
