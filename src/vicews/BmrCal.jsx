import React from "react";
import Menubar from "../components/Menubar.jsx";
import HeaderCal from "../components/HeaderCal.jsx";
import bmr from '../assets/bmr.png'
import Footer from "../components/Footer.jsx";
const BmrCal = () => {
  return (
    <div>
      <Menubar />
      <HeaderCal titleName="Bmr" imgName={bmr}   />
         <Footer emoji="😂" />
      Baracl Page
    </div>
  );
};

export default BmrCal;
