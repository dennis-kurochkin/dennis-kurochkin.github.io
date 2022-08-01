import { FaGithubAlt, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { SiHabr } from 'react-icons/si'
import { ReactNode } from 'react'
import styles from './Footer.module.scss'

type ContactLink = {
  link: string
  title: string
  icon: ReactNode
}

const contactsList: ContactLink[] = [
  {
    link: 'https://t.me/dennis_kurochkin',
    title: 'Telegram',
    icon: <FaTelegramPlane />,
  },
  {
    link: 'https://www.linkedin.com/in/dennis-kurochkin/',
    title: 'LinkedIn',
    icon: <FaLinkedinIn />,
  },
  {
    link: 'https://github.com/dennis-kurochkin',
    title: 'GitHub',
    icon: <FaGithubAlt />,
  },
  {
    link: 'https://career.habr.com/dennis-kurochkin',
    title: 'Habr Career (Хабр Карьера)',
    icon: <SiHabr />,
  },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.creditsText}>
        Made with passion 🏃 by Dennis Kurochkin, © 2020 -
        {' '}
        {new Date().getFullYear()}
      </p>
      <ul className={styles.linksList}>
        {contactsList.map(({ link, title, icon }, index) => (
          <li
            key={index}
            className={styles.linksListItem}
          >
            <a
              href={link}
              className={styles.linksListLink}
              title={title}
              target={'_blank'}
              rel={'noreferrer'}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
