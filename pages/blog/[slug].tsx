import Head from 'next/head'
import Layout from '../../layouts/layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPostData, getPostsSlugs } from '../../lib/StaticBlog.lib'
import { IBlogPost } from '../../domain/blogPost'
import { HEAD_TITLE_POSTFIX } from '../../domain'
import styles from './[slug].module.scss'
import BlogPostTag from '../../components/BlogPostTag'

interface IBlogPostPageProps {
  postData: IBlogPost
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getPostsSlugs(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      postData: await getPostData(params?.slug as string),
    },
  }
}

const BlogPostPage = ({ postData }: IBlogPostPageProps) => {
  return (
    <>
      <Head>
        <title>{postData.title} {HEAD_TITLE_POSTFIX}</title>
      </Head>
      <Layout
        title={postData.title}
      >
        {Boolean(postData.tags.length) && (
          <ul className={styles.tags}>
            {postData.tags.map((tag, index) => (
              <li key={index}>
                <BlogPostTag
                  title={tag}
                  size={'lg'}
                />
              </li>
            ))}
          </ul>
        )}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />
        <p className={styles.publishTitle}>
          Published
        </p>
        <p className={styles.publishDate}>
          {postData.publishDate}
        </p>
      </Layout>
    </>
  )
}

export default BlogPostPage
