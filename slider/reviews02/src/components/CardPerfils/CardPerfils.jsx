import React from 'react';
import 'animate.css';
import './CardPerfils.css';

function CardPerfils({ children }) {
  return <section className="container animate__zoomIn">{children}</section>;
}

export default CardPerfils;
