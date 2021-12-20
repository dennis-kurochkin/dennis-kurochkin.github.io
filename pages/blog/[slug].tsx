import Head from 'next/head'
import Layout from '../../layouts/layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPostData, getPostsSlugs } from '../../lib/staticBlog'
import { IBlogPost } from '../../domain/blogPost'
import { HEAD_TITLE_POSTFIX } from '../../domain'
import styles from '../../styles/PostPage.module.scss'

interface IPostPageProps {
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

const PostPage = ({ postData }: IPostPageProps) => {
  return (
    <>
      <Head>
        <title>{postData.title} {HEAD_TITLE_POSTFIX}</title>
      </Head>
      <Layout
        title={postData.title}
      >
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />
      </Layout>
    </>
  )
}

export default PostPage
