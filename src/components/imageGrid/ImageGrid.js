import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 16vw;
  grid-gap: 0.5em;

  * {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
  }

  > :hover {
    filter: blur(4px);
    transition: all ease 0.5s;
    cursor: pointer;
  }

  > :nth-child(6n + 3) {
    grid-column: span 1;
    grid-row: span 2;
  }

  > :nth-child(6n + 2),
  > :nth-child(6n + 5),
  > :nth-child(6n + 6) {
    grid-column: span 2;
    grid-row: span 2;
  }
`

// const data = useStaticQuery(graphql`
//   query MyQuery {
//     allFile(filter: { relativeDirectory: { eq: "grid" } }) {
//       nodes {
//         id
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `)

// return data.allFile.edges.map(node => ({
//   ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
//   id: node.id,
// }))

const ImageGrid = props => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "grid" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)
  console.log(`this da log: ${data}`)
  return (
    <Grid>
      {data.allFile.edges.map(({ id, node }) => (
        <GatsbyImage key={id} alt="image" image={node.childImageSharp.gatsbyImageData} />
      ))}
    </Grid>
  )
}

ImageGrid.propTypes = {}

export default ImageGrid
