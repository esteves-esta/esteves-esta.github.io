import * as React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = ({ location }) => {
  return (
    <Layout location={location} title="esteves-esta">
      <Seo title="esteves-esta" />
      <Bio />
      <header>
        <Link to="/notes">
          <span itemProp="headline">notes</span>
        </Link>
      </header>

      <article>
        <section>
          <p>asdf</p>
        </section>
      </article>
    </Layout>
  )
}

export default Index
