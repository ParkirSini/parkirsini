import React from 'react';
import {useSelector} from "react-redux";

const Reserve = () => {
  const parkingSpace = useSelector(state => state.detail.detail);
  const reviews = useSelector(state => state.reviewDetail.reviewDetail);
  const averageRating = reviews.length > 0
    ? reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
    : "no rating yet";

  return (
    <>
      <section className="reserve-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>{parkingSpace.name}</h5>
              <p>
                <span>Rp. {parkingSpace.price}</span>
              </p>
              <br />
              <p className="reserve-description">
                {parkingSpace.subtitle}
              </p>
            </div>
            <div className="col-md-6">
              <div className="reserve-seat-block">
                <div className="reserve-rating mx-0 mx-md-3">
                  <span>{averageRating}</span>
                </div>
                <div className="reserve-btn">
                  <div className="featured-btn-wrap">
                    <a href="#" className="btn btn-danger">
                      SEWA PARKIR
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reserve
