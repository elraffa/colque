import React from "react"
import PropTypes from "prop-types"
import ArticleItemOne from "./articles/ArticleItemOne"
import ArticleItemTwo from "./articles/ArticleItemTwo"
import { graphql, useStaticQuery } from "gatsby"
import ArticleItem from "./ui/ArticleItem"

const ArticleItems = props => {
  const data = useStaticQuery(graphql`
    query {
      allGoogleSpreadsheetSheet1 {
        nodes {
          excerpt
          id
          image
          text
          title
        }
      }
    }
  `)
  console.log(data)

  return (
    <div
      className="article-items"
      style={{ display: "flex", gap: "30px", marginTop: "30px" }}
    >
      {data.allGoogleSpreadsheetSheet1.nodes.map((item, index) => (
        <ArticleItem key={index} title={item.title} image={item.image} text={item.text} />
      ))}

    </div>
  )
}

ArticleItems.propTypes = {}

export default ArticleItems
