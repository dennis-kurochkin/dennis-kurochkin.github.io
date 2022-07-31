import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/StaticBlog.lib'
import { IBlogPostPreview } from '~/constants/blogPost'
import BlogPostPreviewList from '~/components/BlogPostPreviewList'
import { getPageTitle } from '~/helpers'
import Section from '~/components/Section'
import styles from './index.module.scss'

const MyCurrentJobLink = (
  <a
    href={'https://tech.ozon.ru/'}
    target={'_blank'}
    rel={'noreferrer'}
  >
    <strong>Ozon</strong>
  </a>
)

export const getStaticProps: GetStaticProps = () => {
  const blogPostPreviews: IBlogPostPreview[] = getSortedPostsData(3)

  return {
    props: {
      blogPostPreviews,
    },
  }
}

const HomePage = ({ blogPostPreviews }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>
          {getPageTitle('Front-end engineer Dennis Kurochkin')}
        </title>
      </Head>
      <Layout
        title={'Hey there! 👋'}
      >
        <div>
          <p className={styles.text}>
            I&apos;m Dennis, a
            {' '}
            <strong>front-end engineer</strong>
            {' '}
            at
            {' '}
            {MyCurrentJobLink}
            {' '}
            located in
            {' '}
            <strong>Krasnodar, Russia</strong>
            .
          </p>
          <p className={styles.text}>
            I love building reliable user-friendly interfaces, writing clean self-explanatory code
            {' '}
            and do my job with passion 🏃
            <br />
            My stack is JavaScript, TypeScript, Vue, React and Node.js. Love &apos;em all ❤️
          </p>
          <p className={styles.text}>
            I like running, playing ukulele and filling my GitHub streak every day.
          </p>
        </div>
        {!!(blogPostPreviews.length) && (
          <Section
            title={'Latest blog posts'}
            icon={'📝'}
          >
            <BlogPostPreviewList
              blogPostPreviews={blogPostPreviews}
            />
          </Section>
        )}
        <Section
          title={'Side projects'}
          icon={'🐕'}
        >
          side projects
        </Section>
      </Layout>
    </>
  )
}

export default HomePage
