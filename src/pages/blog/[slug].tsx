import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getFileBySlug, getSlugs, PostData } from '../../lib/content'

const Page: NextPage<PostData> = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource)
  return <>{content}</>
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 🐌
  const slugs = getSlugs('blog')

  return {
    paths: slugs.map(slug => ({
      params: {
        slug
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostData> = async ({ params }) => {
  const post = await getFileBySlug('blog', params?.slug?.toString())

  return { props: post }
}

export default Page
