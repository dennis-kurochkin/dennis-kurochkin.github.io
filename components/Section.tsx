import { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
  title: string
  icon: string
  children: ReactNode
}

const Section = ({ title, icon, children }: SectionProps) => {
  return (
    <section style={{ marginTop: '36px' }}>
      <h2 className={styles.title}>
        <span
          className={styles.icon}
          aria-hidden
        >
          {icon}
        </span>
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
