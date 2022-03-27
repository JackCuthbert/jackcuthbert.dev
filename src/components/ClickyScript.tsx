import React from 'react'
import Script from 'next/script'

export function ClickyScript(): JSX.Element {
  return (
    <>
      <script async src="//static.getclicky.com/101258162.js" />
      <noscript>
        <p>
          <img
            alt="Clicky"
            width="1"
            height="1"
            src="//in.getclicky.com/101258162ns.gif"
          />
        </p>
      </noscript>
    </>
  )
}
