import React from "react";
import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";
import ClientLogos from "../ClientLogos/ClientLogos";
import AboutUs from "../AboutUs/AboutUs";
import Marcent from "../Marcent/Marcent";
import CoustomerOpinion from "../CoustomerOpinion/CoustomerOpinion";
import FaqQuection from "../FaqSection/FaqQuection";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurServices />
      <ClientLogos />
      <AboutUs />
      <Marcent />
      <CoustomerOpinion />
      <FaqQuection />
    </div>
  );
}
