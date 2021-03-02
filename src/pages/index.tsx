import React, { FC } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Project } from '../components/Project'
import { FrontMatter, getAllFilesFrontMatter } from '../lib/content'
import { format } from 'date-fns'
import { NowPlaying } from '../components/NowPlaying'
import { PageContainer } from '../components/layout/PageContainer'
import { CustomLink } from '../components/CustomLink'

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
          <h1 className="font-bold text-3xl mb-2">Yo, I'm Jack.</h1>
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
          <h2 className="text-2xl mb-6 font-bold">Projects</h2>

          <div className="grid grid-cols-1 gap-4">
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
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl mb-4 font-bold">Blog</h2>
          <div className="grid grid-cols-1 gap-2">
            {posts
              .sort((postA, postB) => {
                return postA.date > postB.date ? -1 : 1
              })
              .map(post => (
                <CustomLink href={'/blog/' + post.slug} className="">
                  <p className="font-semibold">
                    <span className="text-gray-500">–</span>{' '}
                    <span>{post.title}</span>{' '}
                    <span className="text-gray-500 text-sm">
                      {format(new Date(post.date), 'd LLL yy')}
                    </span>
                  </p>
                </CustomLink>
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
