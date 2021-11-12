import React from "react"
import PropTypes from "prop-types"
import ArticleItemOne from "./articles/ArticleItemOne"
import ArticleItemTwo from "./articles/ArticleItemTwo"
import { graphql, useStaticQuery } from "gatsby"
import ArticleItem from "./ui/ArticleItem"

const ArticleItems = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allGoogleSpreadsheetSheet1 {
        nodes {
          image
          text
          title
          excerpt
        }
      }
    }
  `)
  console.log(data.allGoogleSpreadsheetSheet1.nodes)

  return (
    <div
      className="article-items"
      style={{ display: "flex", gap: "30px", marginTop: "30px" }}
    >
      {data.allGoogleSpreadsheetSheet1.nodes.map((item, index) => {
         <ArticleItem image={item.image} title={item.title} />
        console.log(item.title);
        console.log(item.image);
        <h1>item.title</h1>
      })}
{/* 
      <ArticleItemOne />
      <ArticleItemTwo /> */}
    </div>
  )
}

ArticleItems.propTypes = {}

export default ArticleItems
