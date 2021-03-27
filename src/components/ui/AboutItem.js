import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Button from "../ui/Button"

const Item = styled.div`
  margin: 0;
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;

  border-radius: 11px;
  background: #f3f1e6;
  box-shadow: 11px 11px 23px #c5c3ba, -11px -11px 23px #ffffff;
`

const AboutItem = ({ aboutItemIcon, aboutItemTitle, aboutItemText }) => {
  return (
    <Item className="about-item">
      <div
        className="about-icon"
        style={{ fontSize: "5rem", flexGrow: "1", textAlign: "center" }}
      >
        {aboutItemIcon}
      </div>
      <div style={{ flexGrow: "2" }}>
        <h3>{aboutItemTitle}</h3>
        <div>{aboutItemText}</div>
        {/* <Button buttonContent="Leer más" /> */}
      </div>
    </Item>
  )
}

AboutItem.propTypes = {}

export default AboutItem
