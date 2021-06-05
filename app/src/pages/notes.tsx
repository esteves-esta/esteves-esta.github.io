import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout/index"
import Seo from "../components/seo"
import { Divider, SectionTitle, SecundaryTitle } from "../styles/index"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    nodes: {
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        title: string
        description: string
      }
    }[]
  }
}

const NotesIndex: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />

        <p>Sem anotações.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SectionTitle>bloco de notas</SectionTitle>
      <Seo title="Bloco de notas" />
      <div>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <article>
              <section>
                <small>{post.frontmatter.date}</small>
                <SecundaryTitle>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </SecundaryTitle>

                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
              <Divider />
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default NotesIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD-MM-YYYY")
          title
          description
        }
      }
    }
  }
`
