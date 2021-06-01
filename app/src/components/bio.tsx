import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

type DataProps = {
  site: {
    siteMetadata: {
      author?: {
        name: string
        summary: string
      }
    }
  }
}

const Bio = () => {
  const query = useStaticQuery<DataProps>(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const author = query.site.siteMetadata?.author

  return (
    <div className="bio">
      <p>bio</p>
    </div>
  )
}

export default Bio
