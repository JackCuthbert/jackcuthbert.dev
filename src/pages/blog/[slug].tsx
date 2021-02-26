import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import { format } from 'date-fns'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getFileBySlug, getSlugs, PostData } from '../../lib/content'

const Page: NextPage<PostData> = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource)

  return (
    <div className="max-w-2xl mx-auto px-4 mt-24 mb-20">
      <article className="prose">
        <h1
          title={`Published on ${format(
            new Date(frontMatter.date),
            'MMMM d, yyyy'
          )}`}
        >
          {frontMatter.title}
        </h1>
        {content}
      </article>
    </div>
  )
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
