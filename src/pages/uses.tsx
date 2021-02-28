import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import hydrate from 'next-mdx-remote/hydrate'
import { getFileBySlug, PostData } from '../lib/content'
import type { GetStaticProps, NextPage } from 'next'
import { PageContainer } from '../components/layout/PageContainer'

const Page: NextPage<PostData> = ({ mdxSource, frontMatter }) => {
  const router = useRouter()
  const content = hydrate(mdxSource)

  return (
    <>
      <Head>
        <title>Uses · Jack Cuthbert</title>
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
          <h1>{frontMatter.title}</h1>
          {content}
        </article>
      </PageContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostData> = async () => {
  const uses = await getFileBySlug('pages', 'uses')

  return { props: uses }
}

export default Page
