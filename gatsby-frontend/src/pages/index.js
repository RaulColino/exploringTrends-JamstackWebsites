import React from "react"
import { graphql, /* Link, */ StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        {
          allStrapiProject {
            edges {
              node {
                strapiId
                id
                date(formatString: "MMMM Do, YYYY")
                title
                description
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                categories {
                  id
                  name
                }
              }
            }
          }
        }
      `}
      /*render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}*/
      render={data => (
        <div className="flex flex-col items-center">
          
          <h1 className="text-3xl my-20 items-center text-center">Hello, Gatsby+Tailwind+Strapi!</h1>
          <div className="text-center mx-8">
            <p
              className="mb-4"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
            <p className="mb-4">
              {/* for external pages dont use gatsby-image but <a> elements */}
              <a
                className="mr-4 text-purple-700 hover:underline"
                href="https://www.gatsbyjs.com/docs"
                target="_blank"
                rel="noopener"
              >Gatsby Docs</a>
              <a
                className="mr-4 text-purple-700 hover:underline"
                href="https://github.com/gatsbyjs/gatsby"
                target="_blank"
                rel="noopener"
              >GitHub</a>
            </p>
          </div>

          {data.allStrapiProject.edges.map((elem, i) => {
            return (
              <Card project={elem} key={elem.node.id} />
            )
          })}
          
        </div>
      )}
    ></StaticQuery>
  </Layout>
)

export default IndexPage
