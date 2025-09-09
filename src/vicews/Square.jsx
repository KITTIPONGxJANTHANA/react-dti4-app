import React from "react";
import Menubar from "../components/Menubar.jsx";
import HeaderCal from "../components/HeaderCal.jsx";
import square from '../assets/square.png'
import Footer from "../components/Footer.jsx";
const Square = () => {
  return (
    <div>
      <Menubar />
      <HeaderCal titleName="Square" imgName={square}   titleC={{ textAlign: "center", color: "#11bcffff" }} />
             <Footer emoji="😲" />
      Square Page
    </div>
  );
};

export default Square;
