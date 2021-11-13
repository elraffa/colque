// check this out https://jmolivas.com/how-use-google-spreadsheet-manage-content-and-trigger-deployment-your-gatsbyjs-site

import React from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"


const ArticleItem = ({ image, title, text }) => {
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
        <img
          src={image}
          width={500}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Fidel Colque - Cardiólogo Electrofisiólogo"
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        {/* <Button
          buttonContent={"Leer más"}
          buttonLink="/"
          buttonClass={"button"}
        /> */}
      </div>
    </div>
  )
}

export default ArticleItem
