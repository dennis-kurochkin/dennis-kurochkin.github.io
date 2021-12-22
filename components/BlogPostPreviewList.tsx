import styles from './BlogPostPreviewList.module.scss'
import { IBlogPostPreview } from '../domain/blogPost'
import BlogPostPreview from './BlogPostPreview'

interface IBlogPostPreviewListProps {
  blogPostPreviews: IBlogPostPreview[]
}

const BlogPostPreviewList = ({ blogPostPreviews }: IBlogPostPreviewListProps) => {
  return (
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
  )
}

export default BlogPostPreviewList