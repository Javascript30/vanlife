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
        <button
          disabled="disabled"
          className={`btn--option ${
            type === "simple"
              ? "btn--simple"
              : type === "rugged"
              ? "btn--rugged"
              : "btn--luxury"
          }  `}
        >
          {type}
        </button>
      </div>
    </Link>
  );
}

export default Van;
