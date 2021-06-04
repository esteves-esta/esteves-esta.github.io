import * as React from "react"
import { Container, Row, Col } from "./styles"
import Languages from "../languages/index"
import Links from "../links/index"

interface Props {
  info: {
    title: string
    description: string
    lang: string[]
    github: string
    url?: string
    image: JSX.Element
  }
}

const ProjectCard = ({ info }: Props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Links github={info.github} url={info.url} />
          <h5>{info.title}</h5>
          <p>{info.description}</p>
          <Languages data={info.lang} />
        </Col>

        {info.image !== null && <Col>{info.image}</Col>}
      </Row>
    </Container>
  )
}

export default ProjectCard
