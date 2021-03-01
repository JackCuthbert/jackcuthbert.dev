import React, { FC } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../components/Project'
import { FrontMatter, getAllFilesFrontMatter } from '../lib/content'
import { format } from 'date-fns'
import { NowPlaying } from '../components/NowPlaying'
import { PageContainer } from '../components/layout/PageContainer'

interface PageProps {
  posts: FrontMatter[]
}

const Bold: FC = ({ children }) => (
  <span className="text-gray-800 font-bold">{children}</span>
)

const Page: NextPage<PageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Jack Cuthbert</title>
      </Head>
      <PageContainer>
        <div className="mb-20">
          <div className="mb-4">
            <Image
              layout="fixed"
              className="rounded-full"
              src="/images/avatar.jpg"
              alt="Picture of Jack Cuthbert"
              width={128}
              height={128}
            />
          </div>
          <h1 className="font-bold text-3xl mb-4">Yo, I'm Jack.</h1>
          <p className="text-gray-500 font-semibold text-xl mb-4 leading-relaxed">
            I'm a <Bold>full-stack software engineer</Bold> based in Melbourne
            with a passion for <Bold>product development</Bold> and{' '}
            <Bold>minimalist design</Bold>.
          </p>
          <div>
            <NowPlaying />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl mb-8">Projects</h2>

          <div className="grid grid-cols-1 gap-6">
            <Project
              name="Kaomoji.moe"
              summary="NLP-powered Slack App to send Japanese text emoticons"
              url="https://kaomoji.moe"
            />

            <Project
              name="slack-fm"
              summary="Self-hosted service to sync Last.fm with Slack statuses"
              url="https://github.com/JackCuthbert/slack-fm"
            />

            <Project
              name="jackcuthbert.dev"
              summary="My Next.js, TypeScript, and Tailwind CSS blog website"
              url="https://github.com/JackCuthbert/jackcuthbert.dev"
            />

            <Project
              name="dotfiles"
              summary="My actively maintained system config for Arch Linux"
              url="https://github.com/JackCuthbert/dotfiles"
            />

            <Project
              name="Sleepy Birb"
              summary="A distraction-free Twitter proxy & browser extension"
              url="https://github.com/JackCuthbert/sleepy-birb"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl mb-8">Blog</h2>
          <div className="grid grid-cols-1 gap-6">
            {posts
              .sort((postA, postB) => {
                return postA.date > postB.date ? -1 : 1
              })
              .map(post => (
                <div className="flex items-center justify-between">
                  <Link href={'/blog/' + post.slug}>
                    <a className="font-bold text-black hover:bg-black hover:text-white">
                      {post.title}
                    </a>
                  </Link>
                  <span className="text-sm">
                    {format(new Date(post.date), 'd LLL yy')}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </PageContainer>
    </>
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
