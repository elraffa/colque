import React from "react"
import PropTypes from "prop-types"
import ArticleItemOne from "./articles/ArticleItemOne"
import ArticleItemTwo from "./articles/ArticleItemTwo"

const ArticleItems = props => {
  return (
    <div
      className="article-items"
      style={{ display: "flex", gap: "30px", marginTop: "30px" }}
    >
      <ArticleItemOne />
      <ArticleItemTwo />
    </div>
  )
}

ArticleItems.propTypes = {}

export default ArticleItems
