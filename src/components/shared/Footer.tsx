import Link from 'next/link'
import React, { FC } from 'react'

export function Footer(): JSX.Element {
  return (
    <div className="max-w-2xl mx-auto px-4 mb-8">
      <div className="border-t border-gray-300 mb-16" />

      {/* <div className="mb-16"> */}
      {/*   <p className="font-semibold mb-2">🎵 Now playing</p> */}
      {/*   <p>Everybody Loves The Sunshine (feat. José James) — Takuya Kuroda</p> */}
      {/* </div> */}

      <div className="grid grid-cols-3">
        <div className="flex flex-col space-y-4">
          <div>
            <Link href="/">
              <a className="font-semibold text-gray-400 hover:text-white hover:bg-black">
                Home
              </a>
            </Link>
          </div>
          <div>
            <a
              href="#"
              className=" font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Notes
            </a>
          </div>
          <div>
            <a
              href="#"
              className=" font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Uses
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <a
              href="https://github.com/JackCuthbert/"
              target="_blank"
              rel="noopener"
              className="font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              GitHub 🡵
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/jackcuthbert/"
              className="font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              LinkedIn 🡵
            </a>
          </div>
          <div>
            <a
              href="https://www.last.fm/user/jckcthbrt"
              target="_blank"
              rel="noopener"
              className="font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Last.fm 🡵
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer me"
              href="https://md.jckcthbrt.io/@jack"
              className="font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Mastodon 🡵
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className=" font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              License
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
