import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import AboutItems from "../components/AboutItems"
import ArticleItems from "../components/ArticleItems"
import { Helmet } from "react-helmet"

import SEO from "../components/seo"

const SectionHeading = styled.h3`
  text-transform: uppercase;
  text-align: center;
  margin: 4.5rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  scroll-margin-top: 3.5em;
`

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

    <SectionHeading id="about">Acerca de mí</SectionHeading>

    <AboutItems />

    <SectionHeading id="activities">Actividades</SectionHeading>
    <ArticleItems />

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
