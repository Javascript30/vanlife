import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import camper from "../assets/images/camper.png";

function About() {
  return (
    <>
      <Navbar />

      <div className="about--img">
        <img src={camper} alt="camper" />
      </div>

      <section className="container">
        <h1 className="about--title">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>

        <p className="about--text">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="about--text">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="about--footer">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <button className="btn btn--black">Explore our vans</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
