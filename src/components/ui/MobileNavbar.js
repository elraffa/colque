import React from "react"
import PropTypes from "prop-types"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"
import { RiMenu3Fill } from "@react-icons/all-files/ri/RiMenu3Fill"

const MobileNavbar = props => {
  return (
    <div
      style={{
        backgroundColor: `#7365aa`,
        padding: "6px 13px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1.6rem",
      }}
    >
      <div className="social">
        <FaFacebook style={{ marginRight: "5px" }} />
        <FaInstagram style={{ marginRight: "5px" }} />
        <FaWhatsapp style={{ marginRight: "5px" }} />
      </div>
      <div style={{ textAlign: "right" }}>
        <RiMenu3Fill />
      </div>
    </div>
  )
}

MobileNavbar.propTypes = {}

export default MobileNavbar
