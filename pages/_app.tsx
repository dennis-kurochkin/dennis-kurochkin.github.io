import 'modern-normalize/modern-normalize.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { HEAD_TITLE_POSTFIX } from '../domain'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My place in the Internet {HEAD_TITLE_POSTFIX}</title>
        <meta name={'yandex-verification'} content={'4d7bdd79ecfdf2ad'} />
        <meta name={'google-site-verification'} content={'FscL9Lr2Xiish7tUprzufCWVRN6hCAUjpFxhJrc2vqk'} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
