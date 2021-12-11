import styles from './Footer.module.scss'
import { FaGithubAlt, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { SiHabr } from 'react-icons/si'

type ContactLink = {
  link: string
  title: string
  icon: JSX.Element
}

const contactsList: ContactLink[] = [
  {
    link: 'https://t.me/dennis_kurochkin',
    title: 'Telegram',
    icon: <FaTelegramPlane />
  },
  {
    link: 'https://www.linkedin.com/in/dennis-kurochkin/',
    title: 'LinkedIn',
    icon: <FaLinkedinIn />
  },
  {
    link: 'https://github.com/dennis-kurochkin',
    title: 'GitHub',
    icon: <FaGithubAlt />
  },
  {
    link: 'https://career.habr.com/dennis-kurochkin',
    title: 'Habr Career (Хабр Карьера)',
    icon: <SiHabr />
  }
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.creditsText}>
        Made by Dennis Kurochkin, 2021
      </p>
      <ul className={styles.linksList}>
        {contactsList.map(({ link, title, icon}, index) => (
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
