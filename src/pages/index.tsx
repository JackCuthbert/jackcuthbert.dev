import React, { FC } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MajorProject } from '../components/MajorProject'
import { MinorProject } from '../components/MinorProject'
import { FrontMatter, getAllFilesFrontMatter } from '../lib/content'

interface PageProps {
  posts: FrontMatter[]
}

const Bold: FC = ({ children }) => (
  <span className="text-black font-semibold">{children}</span>
)

const Page: NextPage<PageProps> = ({ posts }) => {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="mb-12 mt-8 md:mt-24 md:mb-16">
        <div className="mb-4">
          <Image
            layout="fixed"
            className="rounded-full"
            src="/avatar.jpg"
            alt="Picture of Jack Cuthbert"
            width={128}
            height={128}
          />
        </div>
        <h1 className="font-black text-5xl mb-4">Yo, I'm Jack.</h1>
        <p className="text-gray-600 text-lg mb-4">
          I'm a <Bold>full-stack software engineer</Bold> based in Melbourne
          with a passion for <Bold>product development and design</Bold>.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl mb-4 font-semibold">Projects</h2>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <MajorProject
            name="Kaomoji.moe"
            url="https://kaomoji.moe"
            summary="A slack app providing instant access to over 10,000 fun and unique Japanese kaomoji. V2 is out now and has been built with natural language processing, TypeScript, and Google Cloud Run."
            tags={['mlAi', 'typescript', 'googleCloud']}
            icon="/kaomoji-favicon.png"
          />

          <MajorProject
            name="slack-fm"
            url="https://github.com/JackCuthbert/slack-fm"
            summary="A tiny self-hosted service that automatically updates your Slack status from your Last.fm profile just like in the good ol' days of MSN messenger."
            postUrl="some.url"
            tags={['openSource', 'typescript']}
            icon="/slack-fm-favicon.png"
          />

          <MinorProject
            name="jackcuthbert.dev"
            summary="My Next.js, TypeScript, and Tailwind CSS blog website"
            url="https://github.com/JackCuthbert/jackcuthbert.dev"
          />

          <MinorProject
            name="dotfiles"
            summary="My actively maintained system config for Arch Linux"
            url="https://github.com/JackCuthbert/dotfiles"
          />

          <MinorProject
            name="Sleepy Birb"
            summary="A distraction-free Twitter proxy & browser extension"
            url="https://github.com/JackCuthbert/sleepy-birb"
          />
        </div>
      </div>

      <h2 className="text-2xl mb-4 font-semibold">Recent posts</h2>
      <div className="mb-8">
        {posts.map(post => (
          <Link href={'/blog/' + post.slug}>
            <a className="bg-white border border-gray-200 rounded-lg p-4 flex space-x-4">
              {post.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const files = getAllFilesFrontMatter('blog')

  return {
    props: {
      posts: files
    }
  }
}

export default Page
