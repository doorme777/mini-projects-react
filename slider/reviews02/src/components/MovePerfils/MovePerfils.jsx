import React from 'react';
import 'animate.css';
import './MovePerfils.css';

function MovePerfils({ backwardFunction, fowardFunction }) {
  return (
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
  );
}

export default MovePerfils;
