import React from "react";
import Menubar from "../components/Menubar.jsx";
import HeaderCal from "../components/HeaderCal.jsx";
import car from "../assets/car.png";
import Footer from "../components/Footer.jsx";
const CarCal = () => {
  return (
    <div>
      <Menubar />
      <HeaderCal titleName="CarCal" imgName={car} />
         <Footer emoji="😀" />
      CarCal Page
    </div>
  );
};

export default CarCal;
