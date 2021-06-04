import * as React from "react"
import { Link } from "gatsby"
import {
  Nav,
  Navlink,
  Container,
  Header,
  Footer,
  MainContent,
  CenterContainer,
} from "./styles"
import { StaticImage } from "gatsby-plugin-image"
import { GitHub, Linkedin } from "react-feather"
import colors from "../../styles/colors"

const Layout = ({ location, title, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  return (
    <Container>
      <header>
        <Header>
          <Link to="/">
            <StaticImage alt="logo" src="../../images/esteves-esta/logo2.png" />
          </Link>
          <Nav>
            <Navlink to="/" location={location}>
              <span>projetos</span>
            </Navlink>
            <Navlink to="/notes" location={location}>
              <span>bloco de notas</span>
            </Navlink>
            <a href="https://github.com/esteves-esta" target="blank">
              <GitHub color={colors.red} size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/esteves-fernanda"
              target="blank"
            >
              <Linkedin color={colors.red} size={18} />
            </a>
          </Nav>
        </Header>
      </header>

      {isRootPath === true && (
        <CenterContainer>
          <p>Olá, meu nome é Fernanda Esteves. </p>
          <p>
            Sou formada em <b>Design Gráfico</b> e{" "}
            <b>Análise e Desenvolvimento de Sistema.</b>
          </p>
        </CenterContainer>
      )}

      <MainContent>
        <CenterContainer>
          {children}

          <Footer>
            <span>
              designed & developed by esteves-esta © {new Date().getFullYear()}
            </span>

            <span>
              built with <a href="https://www.gatsbyjs.com">gatsby</a>
            </span>
          </Footer>
        </CenterContainer>
      </MainContent>
    </Container>
  )
}

export default Layout
