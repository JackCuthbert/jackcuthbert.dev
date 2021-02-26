import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import { getFileBySlug, PostData } from '../lib/content'
import type { GetStaticProps, NextPage } from 'next'

const Page: NextPage<PostData> = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource)

  return (
    <div className="max-w-2xl mx-auto px-4 mt-24 mb-20">
      <article className="prose">
        <h1>{frontMatter.title}</h1>
        {content}
      </article>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostData> = async () => {
  const uses = await getFileBySlug('pages', 'uses')

  return { props: uses }
}

export default Page
