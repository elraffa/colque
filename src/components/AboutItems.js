import React from "react"
import AboutItem from "./ui/AboutItem"

import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard"
import { MdSchool } from "react-icons/md"
import { FaBookMedical } from "react-icons/fa"
import { FaClinicMedical } from "react-icons/fa"

const AboutItems = props => {
  return (
    <div style={{ padding: "3em" }}>
      <div
        className="about-items"
        style={{
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(2, 2fr)",
          gridGap: "2rem",
        }}
      >
        <AboutItem
          aboutItemIcon={<FaAddressCard />}
          aboutItemTitle={"Bio"}
          aboutItemText={
            <>
              <p>
                Soy Fidel Colque, médico Cardiólogo y Eléctrofisiólogo de Venado
                Tuerto. Nací en Orán, Salta el 15 de mayo de 1979. Soy un
                apasionado por las actividades deportivas, especialmente el
                fútbol y el running.{" "}
              </p>
              <p>
                Me interesa el trabajar con contacto con la comunidad y apoyar
                causas humanitarias y sociales.
              </p>
            </>
          }
        />
        <AboutItem
          aboutItemIcon={<MdSchool />}
          aboutItemTitle={"Formación"}
          aboutItemText={
            <>
              <p>
                <strong>Médico.</strong> Facultad de Ciencias Médicas de la
                Universidad Nacional de Rosario (24 de abril 2006)
              </p>
              <p>
                <strong>Cardiólogo.</strong> Colegio de Médicos de la Pcia de
                Santa Fe 2da Circunscripción. (2 de agosto 2011)
              </p>
              <p>
                <strong>Especialista en Electrofisiología Cardíaca.</strong>{" "}
                Universidad Favaloro. (28 de marzo 2014)
              </p>
              <p>
                <strong>Fellow en Electrofisiología Cardíaca.</strong> Hospital
                Universitario de la Fundación Favaloro (31 de mayo 2016)
              </p>
            </>
          }
        />
        <AboutItem
          aboutItemIcon={<FaBookMedical />}
          aboutItemTitle={"Trabajos"}
          aboutItemText={
            <ul>
              <li>Cardiólogo.</li> <li>Electrofisiólogo</li>
            </ul>
          }
        />
        <AboutItem
          aboutItemIcon={<FaClinicMedical />}
          aboutItemTitle={"Consultorio"}
          aboutItemText={
            <>
              <p>
                Mi consultorio está en Venado Tuerto, Santa Fe. Si tenés alguna
                consulta podés contactarme telefónicamente al 3462 583038 o por
                WhatsApp para que coordinemos un turno.
              </p>
            </>
          }
        />
      </div>
    </div>
  )
}

export default AboutItems
