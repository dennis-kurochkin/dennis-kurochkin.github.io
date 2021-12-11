import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Layout from '../layouts/layout'

const MyCurrentJobLink = (
  <a
    href={'https://tech.ozon.ru/'}
    target={'_blank'}
    rel={'noreferrer'}
  >
    <strong>Ozon</strong>
  </a>
)

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My place in the Internet - Dennis Kurochkin</title>
      </Head>
      <Layout
        title={'Hey there!'}
      >
        <p className={styles.text}>
          I&apos;m Dennis, a <strong>front-end engineer</strong> at {MyCurrentJobLink} located
          in <strong>Krasnodar, Russia</strong>.
        </p>
        <p className={styles.text}>
          I love building user-friendly interfaces, writing clean self-explaining code and do my job well.<br />
          My stack is JavaScript & TypeScript, Vue, React and Node.js. But I keep learning stuff 🐱‍💻
        </p>
        <p className={styles.text}>
          I am also professional book reader, sophisticated audiobook/podcast listener, productivity enjoyer and a fellow hiker.
        </p>
      </Layout>
    </>
  )
}

export default Home
