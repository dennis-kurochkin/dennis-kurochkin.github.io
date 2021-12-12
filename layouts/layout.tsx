import styles from './layout.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode | ReactNode[],
  title: string | JSX.Element
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Container>
      <div className={styles.layout}>
        <Header
          title={title}
        />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </Container>
  )
}

export default Layout
