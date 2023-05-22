import React from "react";
import { Link } from "react-router-dom";
import "../../dashboard.css";

import explorer from "../../../assets/images/explorer.png";
import beachbum from "../../../assets/images/beachbum.png";
import greenwonder from "../../../assets/images/greenwonder.png";

function Host() {
  return (
    <>
      <div className="host">
        <ul className="host--nav  container">
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

        <section className="income">
          <div className="container">
            <h1>Welcome!</h1>
            <div className="income--details">
              <p>
                Income last <span>30 days</span>
              </p>
              <Link to="/host/income">Details</Link>
            </div>

            <h2 className="income--generated">$2,260</h2>
          </div>
        </section>

        <div className="review">
          <div className=" container">
            <h3 className="score">
              Review score ⭐5.0<span>/5</span>
            </h3>
            <Link to="/host/review">Details</Link>
          </div>
        </div>

        <div className="host--vans container">
          <div className="top--section">
            <h3>Your listed vans</h3>
            <Link to="/host/vans">View all</Link>
          </div>

          <div className="host--van">
            <img src={explorer} alt="" />
            <h4>
              Modest Explorer <br />
              <span>$60/day</span>
            </h4>
            <Link>Edit</Link>
          </div>
          <div className="host--van">
            <img src={beachbum} alt="" />
            <h4>
              Beach Bum <br />
              <span>$80/day</span>
            </h4>
            <Link>Edit</Link>
          </div>
          <div className="host--van">
            <img src={greenwonder} alt="" />
            <h4>
              Green Wonder <br />
              <span>$70/day</span>
            </h4>
            <Link>Edit</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Host;
