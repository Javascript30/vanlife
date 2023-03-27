import React from "react";
import { Link } from "react-router-dom";

function Van({ id, name, price, type, image }) {
  return (
    <Link to={`/vans/${id}`}>
      <div className="van">
        <img src={image} alt="" className="van--img" />

        <div className="van--content">
          <h2 className="van--title">{name}</h2>
          <p className="van--price">
            ${price}
            <br />
            <span>/day</span>
          </p>
        </div>
        <i className={type}>{type}</i>
      </div>
    </Link>
  );
}

export default Van;
