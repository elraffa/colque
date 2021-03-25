import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import DesktopMenu from "./desktop/DesktopMenu"

import Button from "../components/ui/Button"
import MobileNavbar from "../components/ui/MobileNavbar"

const Header = ({ siteTitle, siteDescription, siteTag }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <MobileNavbar />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1em 0",
        }}
      >
        <StaticImage
          className="main-image"
          src="../images/fidel-colque-cardiologo.jpeg"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Fidel Colque - Cardiólogo Electrofisiólogo"
          style={{ margin: `3em auto`, borderRadius: "50%" }}
        />
        <h1 style={{ margin: "0.1em", textAlign: "center" }}>
          <Link
            to="/"
            style={{
              color: `#7365AA`,
              textDecoration: `none`,
              fontSize: "3rem",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <h3 style={{ textAlign: "center" }}>{siteTag}</h3>
      <h5 style={{ textAlign: "center" }}>{siteDescription}</h5>
      <div
        className="header-buttons"
        style={{
          marginTop: "15%",
          display: "flex",
          justifyContent: "center",
          gap: "10%",
        }}
      >
        <Button
          buttonClass={"button-main"}
          buttonContent={"Blog"}
          buttonLink="/"
        />
        <Button
          buttonClass={"button-main"}
          buttonContent={"Blog"}
          buttonLink="/page-2"
        />
      </div>
    </div>
    <DesktopMenu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  siteTag: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
