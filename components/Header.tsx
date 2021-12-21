import styles from './Header.module.scss'
import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

const NavElement = ({ children, href, isActive }: { children: ReactNode, href: string, isActive: boolean }) => {
  return (
    <li className={styles.navListItem}>
      <Link href={href}>
        <a className={classnames(styles.navListLink, isActive && styles.navListLinkActive)}>
          {children}
        </a>
      </Link>
    </li>
  )
}

interface HeaderProps {
  title: string | JSX.Element
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter()
  const navRoutes = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
  ].map(route => ({
    ...route,
    isActive: (router.route.includes(route.href) && route.href !== '/') || router.route === route.href,
  }))

  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navRoutes.map(({ href, isActive, title }, index) => (
            <NavElement
              key={index}
              href={href}
              isActive={isActive}
            >
              {title}
            </NavElement>
          ))}
        </ul>
      </nav>
      <h1 className={styles.title}>
        {title}
      </h1>
    </header>
  )
}

export default Header
