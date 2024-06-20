import React from 'react';
import 'animate.css';
import './Card.css';

function Card({ supriseMe, backwardFunction, fowardFunction, ...props }) {
  const { img, name, job, description } = props;

  return (
    <>
      <figure className="containterImage">
        <img src={img} alt={name} />
      </figure>
      {/* <div className="container-icons">
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
      </div> */}
      <div className="details">
        <h3 className="name">{name}</h3>
        <h4 className="job">{job}</h4>
        <p className="description">{description}</p>
      </div>
      <span className="decorationImage"></span>
    </>
  );
}

export default Card;
