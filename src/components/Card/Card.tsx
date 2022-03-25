import React from "react";

import "./card.css";

function Card({ id, contact_1_name }: any) {
  return (
    <div className="item">
      <div className="top-container">
        <div className="name">{contact_1_name}</div>
        <div className="content">{id}</div>
      </div>
    </div>
  );
}

export default Card;
