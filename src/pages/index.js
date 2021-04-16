import * as React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import image from "../images/colque-icon.png"

import Layout from "../components/layout"
import AboutItems from "../components/AboutItems"
import ArticleItems from "../components/ArticleItems"
import ImageGrid from "../components/imageGrid/ImageGrid"

import SEO from "../components/seo"

const SectionHeading = styled.h3`
  text-transform: uppercase;
  text-align: center;
  margin: 4.5rem 0 1rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  scroll-margin-top: 3.5em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" image={image} />
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0"
      ></meta>
      <title>Fidel Colque - Cardiólogo y Electrofisiólogo</title>
      <meta
        name="google-site-verification"
        content="RpR99Xtp1x6NaEkXXy3UZWTQZ_6yu91ggzbeohxJxJ4"
      />
    </Helmet>

    <SectionHeading id="about">Acerca de mí</SectionHeading>

    <AboutItems />

    <SectionHeading id="activities">Actividades</SectionHeading>
    <ArticleItems />
    <SectionHeading id="multimedia">Imágenes</SectionHeading>
    <ImageGrid />

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
