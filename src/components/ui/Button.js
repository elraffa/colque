import React from "react"
import { Link } from "gatsby"

const Button = ({ buttonContent, buttonLink }) => {
  return (
    <Link
      to={buttonLink}
      className="button-main"
      style={{
        padding: `10px 60px`,
        width: "100%",
        color: `#fff`,
        textDecoration: "none",
        textAlign: "center",
        display: `inline-block`,
        borderRadius: `35px`,
        fontWeight: "bold",
      }}
    >
      {buttonContent}
    </Link>
  )
}

export default Button
