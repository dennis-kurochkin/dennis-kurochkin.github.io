import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Layout from '../../layouts/layout'
import { getSortedPostsData } from '../../lib/StaticBlog.lib'
import { IBlogPostPreview } from '../../domain/blogPost'
import BlogPostPreviewList from '../../components/BlogPostPreviewList'
import { HEAD_TITLE_POSTFIX } from '../../domain'

export const getStaticProps: GetStaticProps = () => {
  const blogPostPreviews: IBlogPostPreview[] = getSortedPostsData()

  return {
    props: {
      blogPostPreviews,
    },
  }
}

const BlogPage = ({ blogPostPreviews }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const hasBlogPostPreviews = Boolean(blogPostPreviews.length)

  return (
    <>
      <Head>
        <title>
          {`Blog ${HEAD_TITLE_POSTFIX}`}
        </title>
      </Head>
      <Layout
        title={'My blog posts'}
      >
        {hasBlogPostPreviews && (
          <BlogPostPreviewList
            blogPostPreviews={blogPostPreviews}
          />
        )}
      </Layout>
    </>
  )
}

export default BlogPage
