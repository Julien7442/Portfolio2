import React from "react";
import { CardImg } from "reactstrap";
import { ScaleLoader } from "react-spinners";
import Logo from "../../assets/img/logo.png";

const Loading = props => {
  return (
    <div
      style={{ background: "#000", width: "100vw", height: "100vh" }}
      className="animated slideInLeft d-flex align-items-center justify-content-center flex-column"
    >
      <CardImg
        src={Logo}
        style={{
          maxWidth: "200px",
          animation: "changeColor",
          animationDuration: "5s",
          background: "#000"
        }}
      />
      <h6 className="mt-4 mb-4">{props.text}</h6>
      <ScaleLoader size={20} color="#08fdd8" />
    </div>
  );
};

export default Loading;
