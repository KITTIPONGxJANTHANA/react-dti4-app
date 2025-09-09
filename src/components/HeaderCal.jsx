import React from "react";

const HeaderCal = (props) => {
  const { titleName, imgName } = props;
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>{titleName}</h1>
      <img
        src={imgName}
        alt=""
        style={{
          display: "block",
          margin: "20px auto",
          width: "200px",
          height: "auto",
        }}
      />
    </>
  );
};

export default HeaderCal;
