import React from "react";
import { Button } from "reactstrap";

const CustomButton = props => {
  return (
    <Button
      outline
      style={{
        color: "#08fdd8",
        border: "1px solid #08fdd8",
        backgroundColor: "transparent",
        letterSpacing: "4px",
        fontSize: "12px",
        padding: "8px 10px"
      }}
      size="sm"
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
