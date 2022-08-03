import { ReactNode } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { HiOutlineExternalLink } from 'react-icons/hi'
import styles from './Header.module.scss'

const NavElement = ({ children, href, isActive }: { children: ReactNode, href: string, isActive: boolean }) => {
  return (
    <li className={styles.navListItem}>
      <NextLink href={href}>
        <a className={classnames(styles.navListLink, isActive && styles.navListLinkActive)}>
          {children}
        </a>
      </NextLink>
    </li>
  )
}

interface HeaderProps {
  title: string | ReactNode
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
  ].map((route) => ({
    ...route,
    isActive: (router.route.includes(route.href) && route.href !== '/') || router.route === route.href,
  }))

  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navRoutes.map(({ href, isActive, title: routeTitle }, index) => (
            <NavElement
              key={index}
              href={href}
              isActive={isActive}
            >
              {routeTitle}
            </NavElement>
          ))}
          <li className={styles.navListItem}>
            <a
              href={'/CV.pdf'}
              className={styles.navListLink}
              target={'_blank'}
              rel={'noreferrer'}
            >
              CV
              <HiOutlineExternalLink />
            </a>
          </li>
        </ul>
      </nav>
      <h1 className={styles.title}>
        {title}
      </h1>
    </header>
  )
}

export default Header
