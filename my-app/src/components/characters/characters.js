//sets up the reusable character component
import React from "react";
import "./characters.css";

//pass the image into each card so all 12 are rendered
const characterCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default characterCard;