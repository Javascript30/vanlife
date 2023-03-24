import React, { useEffect } from "react";
import Footer from "../Footer";

import Navbar from "../Navbar";

function Vans() {
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => console.log("Success", data));
  }, []);

  return (
    <>
      <Navbar />
      <section className="vans van--conatiner">
        <h1 className="vans--title">Explore our van options</h1>

        {/* Filtering options */}

        <button className="btn btn--options">Simple</button>
        <button className="btn btn--options">Luxury</button>
        <button className="btn btn--options">Rugged</button>
        {/* reset filtering */}
        <button type="reset">Clear filters</button>

        {/* Van Section */}
      </section>
      <Footer />
    </>
  );
}

export default Vans;
