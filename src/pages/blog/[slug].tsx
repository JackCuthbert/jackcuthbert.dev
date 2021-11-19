import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { allPosts } from '.contentlayer/data'
import { Post } from '.contentlayer/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { WithLayout } from '../../types'
import { getStandardLayout } from '../../layouts'
import { MDXComponents } from '../../components/MDXComponents'
import { OldPostPanel } from '../../components/OldPostPanel'
import { differenceInDays } from 'date-fns'

const now = new Date()

const BlogPost: WithLayout<Post> = ({ title, date, slug, body: { code } }) => {
  const Component = useMDXComponent(code)
  const pageTitle = `${title} · Jack Cuthbert`
  const postDate = new Date(date)
  const overOneYearOld = differenceInDays(now, postDate) > 365

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="article" />
        {/* TODO: Summary in the description field */}
        {/* <meta property="description" content={pageDescription} />, */}
        {/* <meta property="og:description" content={pageDescription} /> */}
        {/* TODO: OG Images */}
        {/* <meta property="og:image" content={'???'} /> */}
      </Head>
      {overOneYearOld && (
        <div className="mb-6">
          <OldPostPanel slug={slug} />
        </div>
      )}
      <div className="prose">
        <Component components={MDXComponents} />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map(p => ({ params: { slug: p.slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = allPosts.find(post => post.slug === params?.slug)!

  return { props: post }
}

BlogPost.getLayout = getStandardLayout

export default BlogPost
