import '../styles/fonts.css'
import '../styles/global.css'
import '../styles/prism-onelight.css'
import '../styles/prism-highlight-lines.css'
import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import type { WithLayout } from '../types'
import { useRouter } from 'next/router'

interface Props extends AppProps {
  Component: WithLayout
}

function App({ Component, pageProps }: Props): JSX.Element {
  const getLayout = Component.getLayout ?? (page => page)
  const router = useRouter()

  return (
    <>
      <Head>
        <meta property="og:site_name" content="Jack Cuthbert" />
        <meta
          property="og:url"
          content={`https://jackcuthbert.dev${router.asPath}`}
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default App
