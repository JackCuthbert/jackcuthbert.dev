import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { FrontMatter, getAllFilesFrontMatter } from '../lib/content'

interface PageData {
  posts: FrontMatter[]
}

const Page: NextPage<PageData> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <p key={post.slug}>
          {post.title} {new Date(post.date).toString()}
        </p>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps<PageData> = async () => {
  const posts = getAllFilesFrontMatter('blog')

  return {
    props: {
      posts
    }
  }
}

export default Page
