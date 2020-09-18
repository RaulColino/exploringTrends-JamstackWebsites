/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
      `
        {
          projects: allStrapiProject {
            edges {
              node {
                strapiId
              }
            }
          }
        }
      `
    )

    if (result.errors) {
        throw result.errors
    }

    // Create projects pages.
    const projects = result.data.projects.edges

    const ProjectTemplate = require.resolve("./src/templates/project.js")

    projects.forEach((proj, index) => {
        createPage({
            path: `/project/${proj.node.strapiId}`,
            component: ProjectTemplate,
            context: {
                id: proj.node.strapiId,
            },
        })
    })

}


