import styles from './BlogPostPreview.module.scss'

interface IBlogPostPreviewProps {
  id: string
  title: string
  publishDate: string
}

const BlogPostPreview = ({ id, title, publishDate }: IBlogPostPreviewProps) => {
  return (
    <article className={styles.self}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          <a href={`/${id}`}>
            {title}
          </a>
        </h3>
        <p className={styles.date}>
          {publishDate}
        </p>
      </div>
    </article>
  )
}

export default BlogPostPreview
