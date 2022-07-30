import classnames from 'classnames'
import styles from './BlogPostTag.module.scss'

interface IBlogPostTagProps {
  title: string
  size?: 'md' | 'lg'
}

const BlogPostTag = ({ title, size = 'md' }: IBlogPostTagProps) => {
  return (
    <div className={classnames(styles.self, styles[size])}>
      {title}
    </div>
  )
}

export default BlogPostTag
