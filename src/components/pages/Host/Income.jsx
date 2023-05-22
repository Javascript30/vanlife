import graph from "../../../assets/images/income.png";
import "../../dashboard.css";
function Income() {
  return (
    <div className="host">
      <section>
        <div className="container">
          <h1>Income</h1>
          <div className="income--details">
            <p>
              Last <span>30 days</span>
            </p>
          </div>

          <h2 className="income--generated">$2,260</h2>
        </div>
      </section>

      <div className="graph--img container">
        <img src={graph} alt="graph" />
      </div>

      <div className="transactions container">
        <div className="top--section">
          <h3>Your transactions(3)</h3>
          <p>
            Last <span>30 days</span>
          </p>
        </div>

        <div className="transaction--details">
          <p className="cost">$720</p>
          <p className="date">1/12/22</p>
        </div>
        <div className="transaction--details">
          <p className="cost">$560</p>
          <p className="date">10/11/22</p>
        </div>
        <div className="transaction--details">
          <p className="cost">$980</p>
          <p className="date">23/11/22</p>
        </div>
      </div>
    </div>
  );
}

export default Income;
