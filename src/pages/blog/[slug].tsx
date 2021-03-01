import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import { format } from 'date-fns'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getFileBySlug, getSlugs, PostData } from '../../lib/content'
import { useRouter } from 'next/router'
import { PageContainer } from '../../components/layout/PageContainer'
import { MDXComponents } from '../../components/shared/MDXComponents'
import Head from 'next/head'

const Page: NextPage<PostData> = ({ mdxSource, frontMatter }) => {
  const router = useRouter()
  const content = hydrate(mdxSource, {
    components: MDXComponents
  })

  return (
    <>
      <Head>
        <title>{frontMatter.title} · Jack Cuthbert</title>
      </Head>
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
          <h1 title={format(new Date(frontMatter.date), 'MMMM d, yyyy')}>
            {frontMatter.title}
          </h1>
          {content}
        </article>
      </PageContainer>
    </>
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
