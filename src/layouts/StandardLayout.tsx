import React, { FC } from 'react'
import { GetLayout } from '../types'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

const StandardLayout: FC = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto px-8 min-h-screen flex flex-col pt-4 pb-12">
      <Navigation />
      <main className="flex-grow mb-12">{children}</main>
      <Footer />
    </div>
  )
}

export const getLayout: GetLayout = page => (
  <StandardLayout>{page}</StandardLayout>
)
