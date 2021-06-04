import React from "react"
import { GitHub, ExternalLink } from "react-feather"
import { Row } from "./styles"
import colors from "../../styles/colors"

interface Props {
  github: string
  url?: string
}

const Links = ({ github, url }: Props) => {
  return (
    <Row>
      <a href={github} target="blank">
        <GitHub color={colors.red} size={20} />
      </a>
      {url && (
        <a href={url} target="blank">
          <ExternalLink color={colors.red} size={20} />
        </a>
      )}
    </Row>
  )
}

export default Links
