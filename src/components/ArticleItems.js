import React from "react"
import PropTypes from "prop-types"
import ArticleItem from "../components/articles/ArticleItem"

const ArticleItems = props => {
  return (
    <div
      className="article-items"
      style={{ display: "flex", gap: "30px", marginTop: "30px" }}
    >
      <ArticleItem />
      <ArticleItem />
    </div>
  )
}

ArticleItems.propTypes = {}

export default ArticleItems
