import React from "react";
import Spinner_2 from "./../assets/Spinner_2.gif";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "15%",
        marginBottom: "50%",

        justifyContent: "center",
      }}
    >
      <img src={Spinner_2} alt="Loading" />
    </div>
  );
};

export default Spinner;
