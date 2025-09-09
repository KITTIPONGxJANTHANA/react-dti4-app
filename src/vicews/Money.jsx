import React from "react";
import Menubar from "../components/Menubar.jsx";
import HeaderCal from "../components/HeaderCal.jsx";
import Moneys from '../assets/money.png'
import Footer from "../components/Footer.jsx";

const Money = () => {
  return (
    <div>
      <Menubar />
      <HeaderCal titleName="Money"  imgName={Moneys} />
                 <Footer emoji="😚" />
      Money Page
    </div>
  );
};

export default Money;
