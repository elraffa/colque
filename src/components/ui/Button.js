import React from "react"
import { Link } from "gatsby"

const Button = ({ buttonContent, buttonLink, buttonClass }) => {
  return (
    <Link to={buttonLink} className={buttonClass}>
      {buttonContent}
    </Link>
  )
}

export default Button
