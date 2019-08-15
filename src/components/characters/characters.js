//sets up the reusable character component
import React from "react";
import "./characters.css";



//pass the image into each card so all 12 are rendered
function CharacterCard(props) {
    return (
        <img src={require ('../../../images/'+ props.imgsrc)} data-id={props.imgsrc} alt="" className="img-thumbnail" onClick={props.onClick}></img>
    );
};

export default CharacterCard;


