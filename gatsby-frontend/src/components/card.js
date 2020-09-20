import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ project }) => {
    const categories = project.node.categories
    const textSlice = project.node.description.slice(0, Math.min(project.node.description.length / 5, 100))
    return (
        /*         <Link to={`/project/${project.node.strapiId}`} className="flex">
                    <div class="max-w-sm bg-white my-5 rounded overflow-hidden shadow-lg">
                        <Img className="h-full w-full rounded-t pb-6 align-end" fluid={project.node.image.childImageSharp.fluid} alt={`image cover of the project: ${project.node.title}`} />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2"> {project.node.title} </div>
                            <p class="text-gray-700 text-base">
                                {textSlice}...
                            </p>
                        </div>
                        <p class="text-gray-700 text-base">
                            {project.node.date}
                        </p>
                        <div class="px-6 pt-4 pb-2">
                            {categories.map(categ => (
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{categ.name}</span>
                            ))}
                        </div>
                    </div>
                    {/ <img src={project.node.image.childImageSharp.fluid.src} alt="imagen del proyecto" /> /}
                </Link> */

        <div class="w-full max-w-3xl mx-auto pt-12 px-8">
            <div class="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                {/* link  */}
                <Link to={`/project/${project.node.strapiId}`} >

                    {/* image */}
                    <Img fluid={project.node.image.childImageSharp.fluid} alt={`image cover of the project: ${project.node.title}`} />

                    {/* title,date,categories */}
                    <div class="px-4 py-2 mt-2 flex items-center">
                        <div class="pb-3">
                            <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{project.node.title}</h2>
                            <p class="text-sm text-gray-600 my-2 mr-1">{project.node.date}</p>
                            {categories.map(categ => (
                                <span class="inline-block mt-10 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1">{categ.name}</span>
                            ))}
                        </div>
                    </div>

                </Link>
            </div>
        </div>
    )
}

export default Card