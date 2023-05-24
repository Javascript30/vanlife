import { NavLink, Outlet } from "react-router-dom";
import "../../dashboard.css";

export default function HostLayout() {
  const activeStyle = {
    color: "var(--black)",
    borderBottom: "3px var(--gray) solid",
  };
  return (
    <>
      <div className="nav">
        <ul className="host--nav container">
          <li>
            <NavLink
              end
              to="/host"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/income"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/vans"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/review"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}
