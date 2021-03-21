import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"
import { RiMenu3Fill } from "@react-icons/all-files/ri/RiMenu3Fill"

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
      }}
    >
      <div className="social" style={{ fontSize: "2rem" }}>
        <FaFacebook style={{ marginRight: "7px" }} />
        <Link to="https://www.instagram.com/fidelvictorcolque/">
          <FaInstagram style={{ marginRight: "7px" }} />
        </Link>
        <Link to="https://api.whatsapp.com/send?phone=541139504487">
          <FaWhatsapp style={{ marginRight: "7px" }} />
        </Link>
      </div>
      <div style={{ textAlign: "right", fontSize: "2rem" }}>
        <RiMenu3Fill />
      </div>
    </div>
  )
}

MobileNavbar.propTypes = {}

export default MobileNavbar
