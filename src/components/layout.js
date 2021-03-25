/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import Location from "../components/ui/Location"
import "./layout.css"

// const Global = createGlobalStyle`
//   body {
//     margin: 0;
//   }
// `

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          tag
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        siteDescription={data.site.siteMetadata?.description}
        siteTag={data.site.siteMetadata?.tag}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        <Location />
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            textAlign: "right",
            padding: "0.5rem",
          }}
        >
          © {new Date().getFullYear()}, Diseño y desarrollo
          {` `}
          <a href="https://www.mktdigitalideas.com">MKTDigital Ideas</a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
