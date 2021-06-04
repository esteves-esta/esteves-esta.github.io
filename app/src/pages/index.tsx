import * as React from "react"
import Languages from "../components/languages/index"
import Layout from "../components/layout/index"
import Seo from "../components/seo"
import Links from "../components/links"
import ProjectCard from "../components/projectCard/index"
import { StaticImage } from "gatsby-plugin-image"
import { Row, RowTitle, Col, MainTitle, SectionTitle } from "../styles/index"

const Index = ({ location }) => {
  const projects = [
    {
      title: "calculadora de conversão de bases",
      description:
        "Projeto pessoal realizado com intuito de praticar conceitos de programação.",
      lang: ["HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/esteves-esta/calculadora-conversao-de-bases",
      url:
        "https://esteves-esta.github.io/calculadora-conversao-de-bases/calculadora.html",
      image: (
        <StaticImage
          alt="Calculadora"
          src={"../images/projetos/calculadora_conversao.png"}
        />
      ),
    },
    {
      title: "goodResults",
      description:
        "Segunda versão do site GoodResults realizado para conclusão do 2º módulo do Curso Técnico de Informática. ",
      lang: ["HTML", "CSS", "JAVASCRIPT", "JQUERY"],
      github: "https://github.com/esteves-esta/goodresults2.0",
      url: "https://esteves-esta.github.io/goodresults2.0/index.html",
      image: (
        <StaticImage
          alt="Site Institucional"
          src={"../images/projetos/goodresults.png"}
        />
      ),
    },
  ]

  return (
    <Layout location={location} title="esteves-esta">
      <Seo title="esteves-esta" />

      <article>
        <SectionTitle>projetos</SectionTitle>
        <section>
          <RowTitle>
            <MainTitle>zênite</MainTitle>
            <Links github="https://github.com/esteves-esta/Zenite" />
          </RowTitle>
          <p>Gerenciador de transporte público</p>
          <Languages
            data={["ReactJS", "Kotlin", "JAVA SPRING BOOT", "NodeJS"]}
          />
          <Row>
            <Col>
              <p>
                <i>
                  Projeto acadêmico para o 3º e 4º semestre do curso de Análise
                  e Desenvolvimento de Sistemas na Faculdade Bandtec
                </i>
              </p>
              <p>
                O sistema Zênite é um automatizador e gerenciador do processo de
                fiscalização de transporte urbano realizado pelo meu grupo Órion
                para a conclusão do curso técnologo. Participei de várias etapas
                do projeto das duas aplicação realizadas:
              </p>
              <ul>
                <li>
                  desenvolvimento das identidades visuais da aplicação e do
                  grupo, como também da paleta de cores e layout das aplicações;
                </li>
                <li>planejamento, protótipo e desenvolvimento das telas;</li>
                <li>implementação da API REST; desenvolvimento da API REST;</li>
              </ul>
            </Col>

            <StaticImage
              height={400}
              alt="logo"
              src="../images/projetos/zenite_aplicativo.gif"
            />
          </Row>
          <Col>
            <p>
              Na primeira fase do projeto foi desenvolvido uma aplicação em
              desktop voltada para os gestores cadastro e análise dos dados.{" "}
            </p>
            <p>
              A segunda fase do projeto foi o desenvolvido um aplicativo mobile
              voltado para fiscais e motoristas para a gestão das viagens.
              Podendo ser visualizado o cronograma de viagens e a marcação do
              ínicio e final da viagem do motorista pelo fiscal através da
              leitura de qrcode.
            </p>
            <StaticImage
              alt="logo"
              src="../images/projetos/zenite_web_detalhesFiscal.png"
            />
          </Col>
        </section>

        <section>
          {projects.map((item, index) => (
            <ProjectCard info={item} />
          ))}
        </section>
      </article>
    </Layout>
  )
}

export default Index
