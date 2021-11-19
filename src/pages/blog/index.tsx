import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { WithLayout } from '../../types'
import { getStandardLayout } from '../../layouts'
import { allPosts } from '.contentlayer/data'
import { Post } from '.contentlayer/types'
import { DateFormat, formatDate } from '../../lib/formatDate'
import { UnderConstructionPanel } from '../../components/UnderConstructionPanel'

const Blog: WithLayout<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog · Jack Cuthbert</title>
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="font-black text-4xl mb-6">Blog</h1>
      <UnderConstructionPanel />
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

      <div className="-mx-4 my-4">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${String(post.slug)}`}>
            <a className="block group transform hover:bg-white p-4 hover:-translate-y-1 transition-all rounded-lg hover:shadow-md">
              <h3 className="font-bold">{post.title}</h3>
              <span className="text-gray-400 font-normal">
                {formatDate(post.date, DateFormat.PostList)}
              </span>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

Blog.getLayout = getStandardLayout

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts
    .filter(post => post.draft !== true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return {
    props: {
      posts
    }
  }
}

export default Blog
