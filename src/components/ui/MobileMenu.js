import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

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
  z-index: 5;

  div {
    width: 1.7rem;
    height: 0.21rem;
    background: white;
    transform-origin: 1px;

    :nth-child(2) {
    }
  }
`

const MobileMenu = props => {
  return (
    <div>
      <MenuIcon>
        <div />
        <div />
        <div />
      </MenuIcon>
    </div>
  )
}

MobileMenu.propTypes = {}

export default MobileMenu
