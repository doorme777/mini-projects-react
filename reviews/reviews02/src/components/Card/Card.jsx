import React from 'react';
import './Card.css';

function Card({ supriseMe, backwardFunction, fowardFunction, ...props }) {
  const { img, name, job, description } = props;

  return (
    <>
      <figure className="containterImage">
        <img src={img} alt={name} />
        <span className="decorationImage"></span>
      </figure>
      <div className="details">
        <h3 className="name">{name}</h3>
        <h4 className="job">{job}</h4>
        <p className="description">{description}</p>
      </div>
      <div className="container-icons">
        <span
          className="backward"
          onClick={() => {
            backwardFunction();
          }}
        ></span>
        <span
          className="foward"
          onClick={() => {
            fowardFunction();
          }}
        ></span>
      </div>
      <button
        className="suprise"
        onClick={() => {
          supriseMe();
        }}
      >
        Suprise Me
      </button>
    </>
  );
}

export default Card;
