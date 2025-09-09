import React from "react";
import Menubar from '../components/Menubar.jsx'
import HeaderCal from '../components/HeaderCal.jsx'
import Footer from "../components/Footer.jsx";
const Not = () => {
  return (
    <>
    <Menubar />
     <HeaderCal />

      <h1 style={{ textAlign: "center", marginTop: "100px",  }}>
        404 Page Not Found
      </h1>
      <h1 style={{ textAlign: "center", fontFamily: "Mali" }}>
        ไม่พบหน้าเพจที่คุณต้องการ กรุณาตรวจสอบ URL อีกครั้ง
      </h1>
    </>
  );
};

export default Not;
