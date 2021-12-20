import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import styles from '../styles/HomePage.module.scss'
import Head from 'next/head'
import Layout from '../layouts/layout'
import BlogPostPreview from '../components/BlogPostPreview'
import { getSortedPostsData } from '../lib/staticBlog'
import { IBlogPostPreview } from '../domain/blogPost'
import { HEAD_TITLE_POSTFIX } from '../domain'

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
  const blogPostPreviews: IBlogPostPreview[] = getSortedPostsData()

  return {
    props: {
      blogPostPreviews,
    },
  }
}

const HomePage = ({ blogPostPreviews }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const hasBlogPostPreviews = Boolean(blogPostPreviews.length)

  return (
    <>
      <Head>
        <title>My place in the Internet {HEAD_TITLE_POSTFIX}</title>
      </Head>
      <Layout
        title={'Hey there!'}
      >
        <div>
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
        </div>
        {hasBlogPostPreviews && (
          <div>
            <h2 className={styles.blogPostsTitle}>Latest blog posts</h2>
            <ul className={styles.blogPosts}>
              {blogPostPreviews.map(({ id, title, publishDate }: IBlogPostPreview, index: number) => (
                <li
                  key={index}
                  className={styles.blogPostsItem}
                >
                  <BlogPostPreview
                    id={id}
                    title={title}
                    publishDate={publishDate}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Layout>
    </>
  )
}

export default HomePage
