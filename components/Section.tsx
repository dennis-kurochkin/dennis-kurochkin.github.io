import { ReactNode } from 'react'
import Button from '~/components/Button'
import styles from './Section.module.scss'

interface SectionProps {
  title: string
  icon: string
  children: ReactNode
}

const Section = ({ title, icon, children }: SectionProps) => {
  return (
    <section style={{ marginTop: '36px' }}>
      <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2
          className={styles.title}
          style={{ margin: '0' }}
        >
          <span
            className={styles.icon}
            aria-hidden
          >
            {icon}
          </span>
          {title}
        </h2>
        <Button as={'button'}>View all</Button>
      </header>
      {children}
    </section>
  )
}

export default Section
