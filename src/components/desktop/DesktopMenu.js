import React from "react"
import PropTypes from "prop-types"

const DesktopMenu = props => {
  return (
    <div className="desktop-menu">
      <ul>
        <li>Acerca de mí</li>
        <li>Actividades</li>
        <li>Comunidad</li>
        <li>Consultorio</li>
      </ul>
    </div>
  )
}

DesktopMenu.propTypes = {}

export default DesktopMenu
