import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import AboutItems from "../components/AboutItems"
import ArticleItems from "../components/ArticleItems"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3
      style={{
        textTransform: "uppercase",
        textAlign: "center",
        margin: "4.5rem 0",
      }}
    >
      Acerca de mí
    </h3>

    <AboutItems />

    <h3
      style={{
        textTransform: "uppercase",
        textAlign: "center",
        margin: "4.5rem 0",
      }}
    >
      Actividades
    </h3>
    <ArticleItems />

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
