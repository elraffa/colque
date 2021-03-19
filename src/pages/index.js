import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import AboutItems from "../components/AboutItems"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3
      style={{
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: "2.5rem",
      }}
    >
      Acerca de mí
    </h3>

    <AboutItems />

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
