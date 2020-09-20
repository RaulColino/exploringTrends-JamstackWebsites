import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image"


function Example() {

    //in JSX const = variable
    //we use hooks to style the navbar
    const [scrolled, setScrolled] = useState("sticky flex w-full bg-transparent border-b-0 items-center justify-between flex-wrap px-4 py-2 m-auto top-0 animated ");

    window.addEventListener('scroll', () => {
        const isTop = window.scrollY < 100;
        if (isTop !== true) {
            setScrolled("z-10 bg-white shadow-2xl sticky flex w-full border-b-0 items-center justify-between flex-wrap px-4 py-2 m-auto top-0 animated")
        } else {
            setScrolled("sticky flex w-full bg-transparent border-b-0 items-center justify-between flex-wrap px-4 py-2 m-auto top-0 animated ")
        }
    })

    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 47, maxHeight: 47) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <nav className={scrolled}>
            <Link to="/" class="flex items-center text-ui-primary" title="Home">
                <Img fluid={data.placeholderImage.childImageSharp.fluid}  style={{
            resizeMode: "cover",
            height: 47,
            width: 47
          }}/>
            </Link>
            <ul class="uppercase  tracking-wide font-bold flex items-center">
                <li class="ml-2"><a href="#" class="text-gray-800 hover:bg-gray-100 rounded p-2">Projects</a></li>
                <li class="ml-2"><a href="#" class="text-gray-800 hover:bg-gray-100 rounded p-2">About</a></li>
            </ul>
        </nav>
    )

}

export default Example

/* const [scrolled, setScrolled] = useState(false);

window.addEventListener('scroll', () => {
    const isTop = window.scrollY < 100;
    if (isTop !== true) {
        setScrolled(true)
    } else {
        setScrolled(false)
    }
})

const Header = ({ siteTitle, navStyle }) => (
    <nav style={{navStyle}}>
        <div>
            <h1>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </nav>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
    navStyle: {
        color: scrolled ? 'red' : '  10;',
        backgroundColor: scrolled ? 'red' : 'blue',
    },
}

export default Header */
