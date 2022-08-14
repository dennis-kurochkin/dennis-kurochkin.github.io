import 'modern-normalize/modern-normalize.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { HEAD_TITLE_POSTFIX } from '~/constants'
import '../styles/globals.scss'

import 'prismjs/themes/prism-tomorrow.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>
          {`My corner of the Internet ${HEAD_TITLE_POSTFIX}`}
        </title>
        <meta
          name={'google-site-verification'}
          content={'FscL9Lr2Xiish7tUprzufCWVRN6hCAUjpFxhJrc2vqk'}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
