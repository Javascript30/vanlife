import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "../host.css";

function Host() {
  return (
    <>
      <Navbar />

      <div className="host">
        <ul className="host--nav">
          <li>
            <Link to="/host">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Host;
