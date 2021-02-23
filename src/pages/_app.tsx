import 'tailwindcss/tailwind.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { Footer } from '../components/shared/Footer'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50">
        <Component {...pageProps} />
      </main>
      <footer className="bg-gray-200">
        <Footer />
      </footer>
    </div>
  )
}
