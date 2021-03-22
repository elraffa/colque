import React from "react"
import AboutItem from "./ui/AboutItem"

import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard"
import { MdSchool } from "react-icons/md"
import { FaBookMedical } from "react-icons/fa"
import { FaClinicMedical } from "react-icons/fa"

const AboutItems = props => {
  return (
    <div
      className="about-items"
      style={{
        margin: 0,
        display: "grid",
        gridTemplateColumns: "repeat(2, 2fr)",
        gridGap: "55px",
        justifyItems: "center",
      }}
    >
      <AboutItem
        aboutItemIcon={<FaAddressCard />}
        aboutItemTitle={"Bio"}
        aboutItemText={
          <ul>
            <li>Cardiólogo.</li> <li>Electrofisiólogo</li>
          </ul>
        }
      />
      <AboutItem
        aboutItemIcon={<MdSchool />}
        aboutItemTitle={"Formación"}
        aboutItemText={"Profesor de Baseball"}
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
        aboutItemText={"Profesor de Baseball"}
      />
    </div>
  )
}

export default AboutItems
