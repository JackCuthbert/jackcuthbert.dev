import React from 'react'
import Head from 'next/head'
import { WithLayout } from '../../types'
import { getStandardLayout } from '../../layouts'
import { UnderConstructionPanel } from '../../components/UnderConstructionPanel'

const Notes: WithLayout = () => {
  return (
    <>
      <Head>
        <title>Notes · Jack Cuthbert</title>
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="font-black text-4xl mb-6">Notes</h1>
      <UnderConstructionPanel />
    </>
  )
}

Notes.getLayout = getStandardLayout

export default Notes
