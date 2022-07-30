import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import styles from './index.module.scss'
import Layout from '../layouts/layout'
import { getSortedPostsData } from '../lib/StaticBlog.lib'
import { IBlogPostPreview } from '../domain/blogPost'
import BlogPostPreviewList from '../components/BlogPostPreviewList'

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
  const hasBlogPostPreviews = Boolean(blogPostPreviews.length)

  return (
    <Layout
      title={'Hey there!'}
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
          I love building user-friendly interfaces, writing clean self-explaining code and do my job well.
          <br />
          My stack is JavaScript & TypeScript, Vue, React and Node.js. But I keep learning stuff 🐱‍💻
        </p>
        <p className={styles.text}>
          I am also professional book reader, sophisticated audiobook/podcast listener,
          productivity enjoyer and a fellow hiker.
        </p>
      </div>
      {hasBlogPostPreviews && (
        <div>
          <h2 className={styles.blogPostsTitle}>Latest blog posts</h2>
          <BlogPostPreviewList
            blogPostPreviews={blogPostPreviews}
          />
        </div>
      )}
    </Layout>
  )
}

export default HomePage
