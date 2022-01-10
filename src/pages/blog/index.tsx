import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { WithLayout } from '../../types'
import { getStandardLayout } from '../../layouts'
import { allPosts } from '.contentlayer/data'
import { DateFormat, formatDate } from '../../lib/formatDate'
import { UnderConstructionPanel } from '../../components/UnderConstructionPanel'
import { MagicHover } from '../../components/MagicHover'

interface PostItem {
  title: string
  date: string
  slug: string
}

interface Props {
  posts: PostItem[]
}

const Blog: WithLayout<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog · Jack Cuthbert</title>
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="font-black text-4xl mb-6">Blog</h1>
      {/*
      <p className="mb-8 text-gray-800 text-lg leading-relaxed">
        Sometimes I write things.
      </p>
      */}

      {/*
      <label className="font-bold text-sm">Filter posts</label>
      <input
        className="block w-full border px-4 py-2 rounded-lg"
        type="search"
        placeholder="Filter..."
      />
      */}

      <div className="-mx-4 pt-4">
        {posts.map(post => (
          <MagicHover
            key={post.slug}
            href={`/blog/${String(post.slug)}`}
            className="p-4 rounded-lg"
          >
            <h3 className="font-bold">{post.title}</h3>
            <span className="text-gray-400 font-normal">
              {formatDate(post.date, DateFormat.PostList)}
            </span>
          </MagicHover>
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = allPosts
    .filter(post => post.draft !== true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(post => ({
      title: post.title,
      date: post.date,
      slug: post.slug
    }))

  return {
    props: {
      posts
    }
  }
}

Blog.getLayout = getStandardLayout

export default Blog
