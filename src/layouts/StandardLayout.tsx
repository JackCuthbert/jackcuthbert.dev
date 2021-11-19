import React, { FC } from 'react'
import { GetLayout } from '../types'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const constrainWidthClass = 'max-w-3xl mx-auto px-8'

const StandardLayout: FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <div
        className={`${constrainWidthClass} min-h-screen flex flex-col pt-4 pb-12`}
      >
        <main className="flex-grow mb-12">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export const getLayout: GetLayout = page => (
  <StandardLayout>{page}</StandardLayout>
)
