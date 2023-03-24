import React from "react";

function Van() {
  return (
    <div className="van">
      <img src="" alt="" className="van--img" />

      <div className="van--content">
        <h2 className="van--title">Mode</h2>
        <p className="van--price">
          {" "}
          =$60
          <br />
          <span>/day</span>
        </p>
      </div>
      <button disabled="disabled" className="btn--option btn--simple">
        Simple
      </button>
    </div>
  );
}

export default Van;
