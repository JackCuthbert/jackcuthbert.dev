import React from 'react'
import Script from 'next/script'

export function ClickyScript(): JSX.Element {
  return (
    <Script
      strategy="afterInteractive"
      src="https://static.getclicky.com/101258162.js"
    />
  )
}
