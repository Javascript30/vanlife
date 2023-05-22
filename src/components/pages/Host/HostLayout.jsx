import { Link, Outlet } from "react-router-dom";
import "../../dashboard.css";

export default function HostLayout() {
  return (
    <>
      <div className="nav">
        <ul className="host--nav container">
          <li>
            <Link to="/host">Dashboard</Link>
          </li>
          <li>
            <Link to="/host/income">Income</Link>
          </li>
          <li>
            <Link to="/host/vans">Vans</Link>
          </li>
          <li>
            <Link to="/host/review">Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}
