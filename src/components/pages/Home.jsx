import Navbar from "../Navbar";
import Footer from "../Footer";
import "../home.css";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container main--content">
          <h1 className="main--title">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="main--text">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="btn btn--long">Find your van</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
