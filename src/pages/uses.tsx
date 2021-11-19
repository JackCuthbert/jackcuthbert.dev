import React from 'react'
import { GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allPages } from '.contentlayer/data'
import type { Page } from '.contentlayer/types'
import { MDXComponents } from '../components/MDXComponents'
import { WithLayout } from '../types'
import { getStandardLayout } from '../layouts'
import Head from 'next/head'

const Uses: WithLayout<Page> = ({ title, body: { code } }) => {
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

Uses.getLayout = getStandardLayout

export const getStaticProps: GetStaticProps<Page> = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const uses = allPages.find(page => page.slug === 'uses')!
  return { props: uses }
}

export default Uses
