import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../ui/Button"

const ArticleItemTwo = props => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        placeItems: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "2%",
      }}
    >
      <div>
        <StaticImage
          src="../../images/fidel-colque-tv.png"
          width={500}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Fidel Colque - Cardiólogo Electrofisiólogo"
        />
      </div>
      <div>
        <h2>Fidel Colque en TV</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          repellat corrupti, natus animi fugiat expedita saepe ea? Nemo,
          quisquam sint.
        </p>
        <Button
          buttonContent={"Leer más"}
          buttonLink="/"
          buttonClass={"button"}
        />
      </div>
    </div>
  )
}

ArticleItemTwo.propTypes = {}

export default ArticleItemTwo
