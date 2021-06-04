import React from "react"
import { Container } from "./styles"
import { PageProps, Link } from "gatsby"

type NavData = {
  previous?: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
  next?: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
}

const postNavigation = ({ previous, next }: NavData) => {
  return (
    <Container>
      {previous && (
        <Link to={previous.fields.slug} rel="prev">
          ← {previous.frontmatter.title}
        </Link>
      )}

      {next && (
        <Link to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </Link>
      )}
    </Container>
  )
}

export default postNavigation
