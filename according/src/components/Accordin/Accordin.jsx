import React from "react";
import "./Accordin.scss";

function Accordin(props) {
  const { title, text } = props;
  return (
    <details>
      <summary>
        <h5>{title}</h5>
        <span></span>
      </summary>
      <p>{text}</p>
    </details>
  );
}

export default Accordin;
