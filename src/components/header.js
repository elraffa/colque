import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import DesktopMenu from "./desktop/DesktopMenu"

import Button from "../components/ui/Button"
import MobileNavbar from "../components/ui/MobileNavbar"
import MobileMenu from "../components/ui/MobileMenu"
import styled from "styled-components"

const MenuLinks = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  opacity: 0.94;
  overflow: hidden;
  background: #ccc;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translate(100%)")};

  ul {
    display: block;
  }

  li {
    margin-top: 3rem;
  }

  a {
    color: #7365aa;
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 700;
  }
`

const MenuIcon = styled.button`
  position: fixed;
  top: 1rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 15;

  div {
    width: 1.5rem;
    height: 0.21rem;
    background: white;
    transform-origin: 1px;
    transition: transform 300ms, opacity 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Header = ({ siteTitle, siteDescription, siteTag }) => {
  const [nav, showNav] = useState(false)

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
        overflow: "hidden",
      }}
    >
      <MobileNavbar />
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>

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
      <MenuLinks nav={nav}>
        <StaticImage
          className="main-image"
          src="../images/fidel-colque-cardiologo.jpeg"
          width={200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Fidel Colque - Cardiólogo Electrofisiólogo"
          style={{
            margin: `0.2em auto`,
            borderRadius: "50%",
            border: "5px solid #7365aa",
          }}
        />
        <ul>
          <li>
            <Link to="#about">Acerca de mí</Link>
          </li>
          <li>
            <Link to="/">Actividades</Link>
          </li>
          <li>
            <Link to="/">Comunidad</Link>
          </li>
          <li>
            <Link to="/">Consultorio</Link>
          </li>
        </ul>
      </MenuLinks>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  siteTag: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
