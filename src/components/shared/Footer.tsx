import React from 'react'
import { CustomLink } from '../CustomLink'
import { NowPlaying } from '../NowPlaying'

export function Footer(): JSX.Element {
  return (
    <div className="max-w-2xl mx-auto px-4 mb-8">
      <div
        className="border-t border-gray-300 mb-16"
        style={{
          borderImageSlice: '1',
          borderImage:
            'linear-gradient(270deg, hsla(216,40%,98%,1) 0%, hsla(214,23%,91%,1) 50%, hsla(216,40%,98%,1) 100%)'
        }}
      />

      <div className="grid grid-cols-3">
        <div className="flex flex-col space-y-4">
          <div>
            <CustomLink
              href="/"
              className="font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Home
            </CustomLink>
          </div>
          <div>
            <CustomLink
              href="#"
              className=" font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Notes
            </CustomLink>
          </div>
          <div>
            <CustomLink
              href="/blog"
              className=" font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Blog
            </CustomLink>
          </div>
          <div>
            <CustomLink
              href="/uses"
              className=" font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Uses
            </CustomLink>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <CustomLink
              href="https://github.com/JackCuthbert/"
              target="_blank"
              className="font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              GitHub 🡵
            </CustomLink>
          </div>
          <div>
            <CustomLink
              target="_blank"
              href="https://www.linkedin.com/in/jackcuthbert/"
              className="font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              LinkedIn 🡵
            </CustomLink>
          </div>
          <div>
            <CustomLink
              href="https://www.last.fm/user/jckcthbrt"
              target="_blank"
              className="font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Last.fm 🡵
            </CustomLink>
          </div>
          <div>
            <CustomLink
              target="_blank"
              rel="noopener noreferrer me"
              href="https://md.jckcthbrt.io/@jack"
              className="font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              Mastodon 🡵
            </CustomLink>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <CustomLink
              href="#"
              target="_blank"
              className=" font-semibold text-gray-400 hover:text-white hover:bg-black"
            >
              License
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  )
}
