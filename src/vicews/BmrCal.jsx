import React from "react";
import Menubar from "../components/Menubar.jsx";
import HeaderCal from "../components/HeaderCal.jsx";
import bmr from "../assets/bmr.png";
import Footer from "../components/Footer.jsx";

const BmrCal = () => {
  return (
    <div>
      <Menubar />
      <HeaderCal
        titleName="Bmr"
        imgName={bmr}
        titleC={{ textAlign: "center", color: "#e60d0d" }}
      />
      <div>
        BMR Calculator Page
      </div>
      <Footer emoji="😂" />
    </div>
  );
};

export default BmrCal;
