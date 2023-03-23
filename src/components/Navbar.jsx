import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container nav">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
