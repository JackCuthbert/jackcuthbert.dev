import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { allPosts } from '.contentlayer/data'
import { Post } from '.contentlayer/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { WithLayout } from '../../types'
import { getStandardLayout } from '../../layouts'
import { MDXComponents } from '../../components/MDXComponents'

const BlogPost: WithLayout<Post> = ({ title, body: { code } }) => {
  const Component = useMDXComponent(code)
  return (
    <>
      <Head>
        <title>{title} · Jack Cuthbert</title>
      </Head>
      <div className="prose">
        <Component components={MDXComponents} />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map(p => ({ params: { slug: p.slug } }))
  console.log(paths)
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
