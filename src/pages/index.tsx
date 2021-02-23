import React, { FC } from 'react'
import { NextPage } from 'next'
import { MajorProject } from '../components/MajorProject'
import { MinorProject } from '../components/MinorProject'

const Bold: FC = ({ children }) => (
  <span className="text-black font-semibold">{children}</span>
)

const Page: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="mb-16 mt-8">
        <span className="block bg-gray-900 rounded-full w-32 h-32 mb-4" />
        <h1 className="font-black text-5xl mb-4">Yo, I'm Jack.</h1>
        <p className="text-gray-600 text-lg mb-4">
          I'm a <Bold>full-stack software engineer</Bold> based in Melbourne
          with a passion for <Bold>product development and design</Bold>.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl mb-4">Projects</h2>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <MajorProject
            name="Kaomoji.moe"
            url="https://kaomoji.moe"
            summary="A slack app providing instant access to over 10,000 fun and unique Japanese kaomoji. V2 is out now and has been built with natural language processing, TypeScript, and Google Cloud Run."
            tags={['mlAi', 'typescript', 'googleCloud']}
          />

          <MajorProject
            name="slack-fm"
            url="https://github.com/JackCuthbert/slack-fm"
            summary="A tiny self-hosted service that automatically updates your Slack status from your Last.fm profile just like in the good ol' days of MSN messenger."
            postUrl="some.url"
            tags={['openSource', 'typescript']}
          />

          <MinorProject
            name="dotfiles"
            summary="Configuration files and setup information for my Arch Linux systems"
            url="https://github.com/JackCuthbert/dotfiles"
          />

          <MinorProject
            name="Sleepy Birb"
            summary="Distraction-free Twitter proxy & browser extension"
            url="https://github.com/JackCuthbert/sleepy-birb"
          />
        </div>
      </div>

      <h2 className="text-2xl mb-4">Latest posts</h2>
    </div>
  )
}

export default Page
