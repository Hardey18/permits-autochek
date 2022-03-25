import React from "react";

import "./card.css";

function Card({ id, name }: any) {
  return (
    <div className="item">
      <div className="top-container">
        <div className="name">{name}</div>
        <div className="content">{id}</div>
      </div>
    </div>
  );
}

export default Card;
