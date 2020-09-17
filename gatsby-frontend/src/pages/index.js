import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>

    <StaticQuery
      query={graphql`
      {
        allStrapiProject {
          edges {
            node {
              id
              date
              title
              description
              image {
                publicURL
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
        <div className="container px-auto py-auto mx-auto bg-red-200">
          {data.allStrapiProject.edges.map((elem, i) => {
            return (
              <>
                <Card project={elem} key={elem.node.id} />
              </>
            )
          })}
        </div>
      )}
    ></StaticQuery>

    <SEO title="Home" />

    <button className="mr-5 bg-blue-700 text-yellow-200 border border-blue-700 font-bold py-2 px-6 rounded-lg">
      Button
    </button>


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>



    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
