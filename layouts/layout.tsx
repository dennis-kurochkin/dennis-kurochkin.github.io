import styles from "./layout.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element,
  title?: string
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
