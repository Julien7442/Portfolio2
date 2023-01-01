import React from "react";
import "./ExperimentContainer.css";
const ExperimentContainer = props => {
  return <div className="experiment">{props.children}</div>;
};

export default ExperimentContainer;
