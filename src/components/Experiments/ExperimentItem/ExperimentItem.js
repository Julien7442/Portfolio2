import React from "react";
import "./ExperimentItem.css";

const ExperimentItem = props => {
  return (
    <div className="card_ card--transform">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img className="card__img" src={props.img} alt="card" />
        <img className="card__img" src={props.img} alt="card" />
        <img className="card__img" src={props.img} alt="card" />
        <img className="card__img" src={props.img} alt="card" />
      </a>
    </div>
  );
};

export default ExperimentItem;
