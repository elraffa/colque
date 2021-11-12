import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ArticleItem = ({ props }) => {
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
          src={props.image}
          width={500}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Fidel Colque - Cardiólogo Electrofisiólogo"
        />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>
          Participé de la Reunión de la Filial Litoral de SADEC: Estimulación
          del Sitema de Conducción y Experiencias Locales, a cargo del Dr.
          Horacio Quiroga Ponce.
        </p>
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
