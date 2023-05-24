import React from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = {
    color: "var(--black)",
    borderBottom: "3px var(--gray) solid",
  };

  return (
    <nav>
      <div className="container nav">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <ul>
          <li>
            <NavLink
              to="/host"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vans"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
