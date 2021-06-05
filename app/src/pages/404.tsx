import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout/index"
import Seo from "../components/seo"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const NotFoundPage: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404" />
      <h1>404</h1>
      <h2>Opa, parece que você achou uma página vázia.</h2>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
