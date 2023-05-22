import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Van from "../Van";
import Navbar from "../Navbar";

function Vans() {
  const [vans, setVans] = useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const myVans = vans.map((van) => {
    return (
      <Van
        key={van.id}
        id={van.id}
        name={van.name}
        price={van.price}
        image={van.imageUrl}
        type={van.type}
      />
    );
  });
  return (
    <>
      <section className="van--container">
        <h1 className="vans--title">Explore our van options</h1>

        {/* Filtering options */}

        <button className="btn btn--options btn--simple">Simple</button>
        <button className="btn btn--options btn--luxury">Luxury</button>
        <button className="btn btn--options btn--rugged">Rugged</button>
        {/* reset filtering */}
        <button type="reset">Clear filters</button>

        {/* Van Section */}
        <div className="vans">{myVans}</div>
      </section>
    </>
  );
}

export default Vans;
