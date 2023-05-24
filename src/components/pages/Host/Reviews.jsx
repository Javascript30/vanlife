import ratings from "../../../assets/images/ratings.png";

function Reviews() {
  return (
    <div className="host">
      <section className="container">
        <div className="review-top">
          <h1>Your Reviews</h1>
          <p>
            last <span>30 days</span>
          </p>
        </div>

        <div className="rating--img">
          <img src={ratings} alt="ratings" />
        </div>

        <div className="rating--details">
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <div className="rating--top">
            <h4>Elliot</h4>
            <p className="rate-date">December 1, 2022</p>
          </div>
          <p className="rate-text">
            The beach bum is such as awesome van! Such as comfortable trip. We
            had it for 2 weeks and there was not a single issue. Super clean
            when we picked it up and the host is very comfortable and
            understanding. Highly recommend!
          </p>
        </div>
        <div className="rating--details">
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <div className="rating--top">
            <h4>Sandy</h4>
            <p className="rate-date">November 23, 2022</p>
          </div>
          <p className="rate-text">
            This is our third time using the Modest Explorer for our travels and
            we love it! No complaints, absolutely perfect!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
