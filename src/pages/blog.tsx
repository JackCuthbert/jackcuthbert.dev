import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { FrontMatter, getAllFilesFrontMatter } from '../lib/content'
import { PageContainer } from '../components/layout/PageContainer'

interface PageData {
  posts: FrontMatter[]
}

const Page: NextPage<PageData> = ({ posts }) => {
  return (
    <PageContainer>
      <h1>Blog</h1>
      {posts.map(post => (
        <p key={post.slug}>
          {post.title} {new Date(post.date).toString()}
        </p>
      ))}
    </PageContainer>
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
