import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"
import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { FaHeartbeat } from "react-icons/fa"
import { FaRegNewspaper } from "react-icons/fa"
import { FaClinicMedical } from "react-icons/fa"
import { MdPeople } from "react-icons/md"

const TopMenuLinks = styled.div`
  text-transform: uppercase;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    margin-right: 1rem;
    font-weight: 700;
    padding: 0.5rem;

    :hover {
      border-radius: 5px;
      background-color: #605691;
      box-shadow: 3px 3px 6px #6b5e9e, -3px -3px 6px #7b6cb6;
      transition: background-color 500ms;
    }
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
        boxShadow: "6px 6px 12px #d9d9d9, -6px -6px 12px #ffffff",
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
        <Link to="/">
          <FaHome style={{ marginRight: "7px" }} />
        </Link>
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
        <Link to="#about">
          <FaHeartbeat /> Acerca de mí
        </Link>
        <Link to="#activities">
          <FaRegNewspaper /> Actividades
        </Link>
        <Link to="/">
          <MdPeople /> Comunidad
        </Link>
        <Link to="#location">
          <FaClinicMedical /> Consultorio
        </Link>
      </TopMenuLinks>
    </div>
  )
}

MobileNavbar.propTypes = {}

export default MobileNavbar
