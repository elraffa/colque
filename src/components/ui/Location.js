import React from "react"
import PropTypes from "prop-types"

const Location = props => {
  return (
    <div
      className="location"
      style={{
        backgroundColor: "#B9B3B3",
        display: "flex",
        padding: "2rem",
        justifyContent: "space-around",
      }}
    >
      <div>
        <h2>Ubicación</h2>
        <p>Mitre 1781, Venado Tuerto, Santa Fe</p>
        <p>
          <strong>Celular:</strong> +54 3462 583038{" "}
        </p>
        <p>
          <strong>Email:</strong> fidelvictorcolque@gmail.com{" "}
        </p>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.23965325199!2d-61.97632968479285!3d-33.75447248068792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c87bfa1eb4e58f%3A0xec4eab998df03334!2sDr.%20Fidel%20Colque%20-%20Cardi%C3%B3logo!5e0!3m2!1ses-419!2sar!4v1616348608274!5m2!1ses-419!2sar"
          width="350"
          height="260"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

Location.propTypes = {}

export default Location
