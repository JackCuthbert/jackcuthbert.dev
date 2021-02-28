import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import { format } from 'date-fns'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getFileBySlug, getSlugs, PostData } from '../../lib/content'
import { useRouter } from 'next/router'
import { PageContainer } from '../../components/layout/PageContainer'

const Page: NextPage<PostData> = ({ mdxSource, frontMatter }) => {
  const router = useRouter()
  const content = hydrate(mdxSource)

  return (
    <PageContainer>
      <div className="mb-20">
        <button
          onClick={() => router.back()}
          className="font-bold text-black mb-1 sm:m-0 hover:bg-black hover:text-white"
        >
          🡰 Back
        </button>
      </div>
      <article className="prose">
        <h1>{frontMatter.title}</h1>
        <p className="text-sm text-gray-500">
          Published on {format(new Date(frontMatter.date), 'MMMM d, yyyy')}
        </p>
        {content}
      </article>
    </PageContainer>
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
