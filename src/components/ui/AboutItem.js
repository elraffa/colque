import React from "react"
import PropTypes from "prop-types"
import Button from "../ui/Button"

const AboutItem = ({ aboutItemIcon, aboutItemTitle, aboutItemText }) => {
  return (
    <div
      style={{
        margin: "0",
        display: "flex",
        gap: "25px",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: "5rem", flexGrow: "1", textAlign: "center" }}>
        {aboutItemIcon}
      </div>
      <div style={{ flexGrow: "4" }}>
        <h3>{aboutItemTitle}</h3>
        <div>{aboutItemText}</div>
        {/* <Button buttonContent="Leer más" /> */}
      </div>
    </div>
  )
}

AboutItem.propTypes = {}

export default AboutItem
