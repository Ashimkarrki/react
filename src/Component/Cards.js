import React from "react";
import { useState } from "react";
const Cards = ({ id, name, image, age }) => {
  return (
    <div className="card">
      <div>
        <img className="img" src={image} alt="img" />
      </div>
      <div>
        <h1 id="name">{name}</h1>
        <h5 id="age">{age}</h5>
      </div>
    </div>
  );
};
export default Cards;
