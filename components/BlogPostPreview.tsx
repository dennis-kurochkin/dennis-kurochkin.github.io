import styles from './BlogPostPreview.module.scss'
import Link from 'next/link'

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
          <Link href={`/blog/${id}`}>
            <a>
              {title}
            </a>
          </Link>
        </h3>
        <p className={styles.date}>
          {publishDate}
        </p>
      </div>
    </article>
  )
}

export default BlogPostPreview
