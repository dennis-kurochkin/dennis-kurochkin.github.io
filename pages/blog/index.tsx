import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '../../layouts/layout'
import { getSortedPostsData } from '../../lib/staticBlog'
import { IBlogPostPreview } from '../../domain/blogPost'
import BlogPostPreviewList from '../../components/BlogPostPreviewList'

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
    <Layout
      title={'My blog posts'}
    >
      {hasBlogPostPreviews && (
        <BlogPostPreviewList
          blogPostPreviews={blogPostPreviews}
        />
      )}
    </Layout>
  )
}

export default HomePage
