import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import ReactMarkdown from "react-markdown"

import SEO from "../components/seo"
import Layout from "../components/layout"


export const query = graphql`
  query ProjectQuery($id: Int!) {
    strapiProject(strapiId: { eq: $id } ) {       
        strapiId
        title
        date
        description
        image {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }       
    }
}
`

const Project = ({ data }) => {
    const project = data.strapiProject
    return (
        <Layout>
            <SEO title={project.title} />
            <div className="flex py-10">
                <Link to="/" className="text-xl border border-teal-500 text-teal-500 block rounded-sm font-bold py-2 px-8 mr-2 flex items-center hover:bg-teal-500 hover:text-white"
                >←</Link>
            </div>
            <div>
                <Img fluid={project.image.childImageSharp.fluid} alt={`image of the project: ${project.title}`} />
                <h1>{project.title}</h1>
                <div>
                    <ReactMarkdown source={project.description} />
                </div>
            </div>
        </Layout>
    )
}

export default Project
