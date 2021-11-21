import React from 'react'
import { GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allPages } from '.contentlayer/data'
import type { Page } from '.contentlayer/types'
import { MDXComponents } from '../components/MDXComponents'
import { WithLayout } from '../types'
import { getStandardLayout } from '../layouts'
import Head from 'next/head'

const pageDescription =
  "Inspired by the uses.tech site this is a mostly up to date list of the things I use day to day to do what I do. I'll link to as many things as I can."

const Uses: WithLayout<Page> = ({ title, body: { code } }) => {
  const Component = useMDXComponent(code)

  return (
    <>
      <Head>
        <title>{title} · Jack Cuthbert</title>
        <meta property="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <div className="prose prose-blue">
        <Component components={MDXComponents} />
      </div>
    </>
  )
}

Uses.getLayout = getStandardLayout

export const getStaticProps: GetStaticProps<Page> = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const uses = allPages.find(page => page.slug === 'uses')!
  return { props: uses }
}

export default Uses
