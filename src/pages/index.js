import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import AboutItems from "../components/AboutItems"
import ArticleItems from "../components/ArticleItems"
import { Helmet } from "react-helmet"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0"
      ></meta>
      <title>Fidel Colque - Cardiólogo y Electrofisiólogo</title>
    </Helmet>

    <h3
      id="about"
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
      id="activities"
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
