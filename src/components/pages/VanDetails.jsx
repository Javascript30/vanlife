import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import arrow from "../../assets/images/arrow.png";
function VanDetails({ image }) {
  return (
    <>
      <Navbar />
      <section className="van--details container">
        <Link to={"/vans"}>
          {" "}
          <img src={arrow} alt="" /> Back to all vans
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default VanDetails;
