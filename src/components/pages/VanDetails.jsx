import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import arrow from "../../assets/images/arrow.png";
function VanDetails() {
  const params = useParams();

  const [vanDetail, setVanDetail] = useState([]);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans));
  }, []);

  return (
    <>
      <section className="van--details container">
        <Link to={"/vans"}>
          {" "}
          <img src={arrow} alt="" /> Back to all vans
        </Link>

        {/* {van ? (
          <> */}
        <img className="van--detail_img" src={vanDetail.imageUrl} alt="van" />
        <i className={vanDetail.type}>{vanDetail.type}</i>

        <h1 className="van--detail_title">{vanDetail.name}</h1>

        <p className="van--detail_price">
          <span>${vanDetail.price}</span>
          /day
        </p>

        <p className="van--detail_text">{vanDetail.description}</p>

        <button className="btn btn--long">Rent this van</button>
        {/* </>
        ) : (
          <h2>Loading ....</h2>
        )} */}
      </section>
    </>
  );
}

export default VanDetails;
