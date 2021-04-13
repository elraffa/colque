import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const ImageGrid = props => {
  const data = graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "grid" } }) {
        edges {
          node {
            name
            publicURL
            relativeDirectory
          }
        }
      }
    }
  `

  return (
    <div>
      {data.allFile.edges.map(img => {
        ;<img src="img" />
      })}
    </div>
  )
}

ImageGrid.propTypes = {}

export default ImageGrid
