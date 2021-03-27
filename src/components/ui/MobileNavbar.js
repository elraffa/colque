import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"

const TopMenuLinks = styled.div`
  text-transform: uppercase;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    margin-right: 1rem;
    font-weight: 700;
  }

  @media only screen and (max-width: 736px) {
    display: none;
  }
`

const MobileNavbar = props => {
  return (
    <div
      style={{
        backgroundColor: `#7365aa`,
        padding: "10px 13px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1.6rem",
        position: "fixed",
        width: "100%",
        zIndex: 10,
        marginBottom: "1em",
      }}
    >
      <div className="social" style={{ fontSize: "2rem" }}>
        <Link to="https://www.facebook.com/fidel.colque.779">
          <FaFacebook style={{ marginRight: "7px" }} />
        </Link>
        <Link to="https://www.instagram.com/fidelvictorcolque/">
          <FaInstagram style={{ marginRight: "7px" }} />
        </Link>
        <Link to="https://api.whatsapp.com/send?phone=543462583038">
          <FaWhatsapp style={{ marginRight: "7px" }} />
        </Link>
      </div>
      <TopMenuLinks>
        <Link to="#about">Acerca de mí</Link>
        <Link to="#activities">Actividades</Link>
        <Link to="https://api.whatsapp.com/send?phone=543462583038">
          Comunidad
        </Link>
        <Link to="#location">Consultorio</Link>
      </TopMenuLinks>
    </div>
  )
}

MobileNavbar.propTypes = {}

export default MobileNavbar
