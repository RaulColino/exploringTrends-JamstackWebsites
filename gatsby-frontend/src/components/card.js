import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ project }) => {
    const categories = project.node.categories
    const textSlice = project.node.description.slice(0, Math.min(project.node.description.length / 5, 100))
    return (
        <Link to={`/project/${project.node.strapiId}`} className="text-blue-900">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <Img fluid={project.node.image.childImageSharp.fluid} alt="a project" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"> {project.node.title}</div>
                    <p class="text-gray-700 text-base">
                        {textSlice}...
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {categories.map(categ => (
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{categ.name}</span>
                    ))}
                </div>
            </div>
            {/* <img src={project.node.image.childImageSharp.fluid.src} alt="imagen del proyecto" /> */}
        </Link>
    )
}

export default Card