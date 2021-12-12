import styles from './Header.module.scss'

interface HeaderProps {
  title: string | JSX.Element
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <h1 className={styles.title}>
        {title}
      </h1>
    </header>
  )
}

export default Header
