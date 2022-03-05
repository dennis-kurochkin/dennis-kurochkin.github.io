import styles from './BlogPostPreview.module.scss'
import Link from 'next/link'
import BlogPostTag from './BlogPostTag'

interface IBlogPostPreviewProps {
  id: string
  title: string
  publishDate: string
  tags: string[]
}

const BlogPostPreview = ({ id, title, publishDate, tags }: IBlogPostPreviewProps) => {
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
        {Boolean(tags.length) && (
          <ul className={styles.tags}>
            {tags.map((tag, index) => (
              <li
                key={index}
                className={styles.tagWrapper}
              >
                <BlogPostTag
                  title={tag}
                />
              </li>
            ))}
          </ul>
        )}
        <p className={styles.date}>
          {publishDate}
        </p>
      </div>
    </article>
  )
}

export default BlogPostPreview
