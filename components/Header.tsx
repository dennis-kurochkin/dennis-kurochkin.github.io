import styles from './Header.module.scss'

interface HeaderProps {
  title?: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <h1 className={styles.title}>
        {title ?? 'Hello, cruel world!'}
      </h1>
    </header>
  )
}

export default Header
