import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  const container = {
    width: "47%",
    margin: "20px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#505052cc",
    padding: "10px 20px",
    fontWeight: "bold",
    color: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.88)", 
    position: "relative",
    zIndex: 1000,
  };
  const menu = {
    listStyleType: "none",
    display: "flex",
    gap: "10px",
    margin: 0,
    padding: 0,
  };

  const menuActive = {
    color: "#ffffffff",
    fontWeight: "bold",
  };
  const link = {
    TextDecoder: "none",
    color: "#ffffffff",
  };
  return (
    <div style={container}>
      <div>MENU</div>
      <div>
        <ul style={menu}>
          <li style={menuActive}>
            <Link style={link} to="/">
              Home
            </Link>
          </li>
          <li style={menuActive}>
            <Link style={link} to="/calculator/money">
              Money
            </Link>
          </li>
          <li style={menuActive}>
            <Link style={link} to="/calculator/square">
              Square
            </Link>
          </li>
          <li style={menuActive}>
            <Link style={link} to="/calculator/carcal">
              CarCal
            </Link>
          </li>
          <li style={menuActive}>
            <Link style={link} to="/calculator/bmr">
              BmrCal
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
