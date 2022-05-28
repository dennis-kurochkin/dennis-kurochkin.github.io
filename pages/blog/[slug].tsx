import Head from 'next/head'
import Layout from '../../layouts/layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPostData, getPostsSlugs } from '../../lib/StaticBlog.lib'
import { IBlogPost } from '../../domain/blogPost'
import { HEAD_TITLE_POSTFIX } from '../../domain'
import styles from './[slug].module.scss'
import BlogPostTag from '../../components/BlogPostTag'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

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
        <article>
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
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <Prism
                    language={match[1]}
                    PreTag="div" /* @ts-expect-error */
                    style={tomorrow}
                    {...props}
                  >{String(children).replace(/\n$/, '')}</Prism>
                ) : (
                  <code
                    className={'code-inline'}
                    {...props}
                  >
                    {children}
                  </code>
                )
              },
            }}
          >{postData.content}</ReactMarkdown>
          <footer className={styles.footer}>
            <p className={styles.publishTitle}>
              Published
            </p>
            <p className={styles.publishDate}>
              {postData.publishDate}
            </p>
          </footer>
        </article>
      </Layout>
    </>
  )
}

export default BlogPostPage
