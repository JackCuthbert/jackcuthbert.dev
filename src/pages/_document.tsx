import React from 'react'
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

import { Favicon } from '../components/Favicon'
import { ClickyScript } from '../components/ClickyScript'

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<Record<string, unknown> & { html: string }> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <Favicon />
        </Head>
        <body>
          <Main />
          <ClickyScript />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
