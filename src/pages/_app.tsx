import '../styles/fonts.css'
import '../styles/global.css'
import '../styles/prism-dark.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { Footer } from '../components/shared/Footer'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="">
        <Component {...pageProps} />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  )
}
