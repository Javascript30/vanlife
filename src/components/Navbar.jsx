import React from "react";
import logo from "../assets/images/logo.png";
// import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div className="container nav">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>

        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Vans</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
