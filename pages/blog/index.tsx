import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/StaticBlog.lib'
import { IBlogPostPreview } from '~/constants/blogPost'
import BlogPostPreviewList from '~/components/BlogPostPreviewList'
import { getPageTitle } from '~/helpers'

export const getStaticProps: GetStaticProps = () => {
  const blogPostPreviews: IBlogPostPreview[] = getSortedPostsData()

  return {
    props: {
      blogPostPreviews,
    },
  }
}

const BlogPage = ({ blogPostPreviews }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const hasBlogPostPreviews = !!(blogPostPreviews.length)

  return (
    <>
      <Head>
        <title>
          {getPageTitle('Blog')}
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
