import type { ReactNode } from 'react'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Container from '~/components/Container'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode | ReactNode[],
  title: string | ReactNode
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
