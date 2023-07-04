import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageSlider from "./ImageSlider.jsx";
import MapComponent from "../MapComponent.jsx";
import { addParkingSpaceReview } from "../../store/actions/index.js";

const BookingDetail = () => {
  const dispatch = useDispatch();
  const parkingSpace = useSelector((state) => state.detail.detail);
  const reviews = useSelector((state) => state.reviewDetail.reviewDetail);
  const facilities = useSelector(
    (state) => state.facilityDetail.facilityDetail
  );
  const relation = useSelector((state) => state.relation.relation);
  console.log(reviews);
  // console.log(facilities)
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handlePublishReview = () => {
    // Check if the rating and review text meet the minimum requirements
    if (rating === 0 || reviewText.length < 10) {
      alert(
        "Please provide a rating and a review with at least 140 characters."
      );
      return;
    }

    // Dispatch an action to submit the review
    dispatch(addParkingSpaceReview(parkingSpace.id, reviewText, rating));

    // Clear the rating and review text inputs
    setRating(0);
    setReviewText("");
  };

  return (
    <>
      <section className="gray-dark booking-details_wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-8 responsive-wrap">
              <div className="booking-checkbox_wrap">
                <ImageSlider parkingSpace={parkingSpace} />

                <div className="booking-checkbox">
                  <p>{parkingSpace.description}</p>
                  <hr />
                </div>
                <h3>Facilities:</h3>
                <br />
                <div className="row">
                  {/* Check if FacilityParkings exists */}
                  {relation.FacilityParkings &&
                    relation.FacilityParkings.map((facilityParking) => {
                      // Find the corresponding facility using facilityId
                      const facility = facilities.find(
                        (f) => f.id === facilityParking.facilityId
                      );
                      if (!facility) return null; // Handle case when facility is not found
                      return (
                        <div className="col-md-4" key={facility.id}>
                          <label className="custom-checkbox">
                            <span className="ti-check-box"></span>
                            <span className="custom-control-description">
                              {facility.name}
                            </span>
                          </label>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="booking-checkbox_wrap booking-your-review">
                <h5>Write a Review</h5>
                <hr />
                <div className="customer-review_wrap">
                  <div className="customer-content-wrap">
                    <div className="your-rating-wrap">
                      <span>Your rating</span>
                      <div className="customer-review">
                        <input
                          type="radio"
                          name="rating"
                          value="1"
                          checked={rating === 1}
                          onChange={handleRatingChange}
                        />
                        <input
                          type="radio"
                          name="rating"
                          value="2"
                          checked={rating === 2}
                          onChange={handleRatingChange}
                        />
                        <input
                          type="radio"
                          name="rating"
                          value="3"
                          checked={rating === 3}
                          onChange={handleRatingChange}
                        />
                        <input
                          type="radio"
                          name="rating"
                          value="4"
                          checked={rating === 4}
                          onChange={handleRatingChange}
                        />
                        <input
                          type="radio"
                          name="rating"
                          value="5"
                          checked={rating === 5}
                          onChange={handleRatingChange}
                        />
                      </div>
                    </div>
                    <div className="your-comment-wrap">
                      <textarea
                        name="#"
                        className="your-rating-content"
                        placeholder="Enter Your Comments"
                        value={reviewText}
                        onChange={handleReviewTextChange}
                      ></textarea>
                      <h6 className="your-rating-notify">
                        at least 10 characters
                      </h6>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <div className="your-rating-btn">
                          <button
                            className="btn btn-danger btn-block"
                            onClick={handlePublishReview}
                          >
                            Publish Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="booking-checkbox_wrap my-4">
                <h4>{reviews.length} Reviews</h4>
                <hr />
                {reviews.map((review) => (
                  <div className="customer-review_wrap" key={review.id}>
                    <div className="customer-img">
                      <p>{review.Customer?.username}</p>
                    </div>
                    <div className="customer-content-wrap">
                      <div className="customer-content">
                        <div className="customer-review">
                          <h5>{review.review}</h5>
                        </div>
                        <div className="customer-rating customer-rating-red">
                          {review.rating}
                        </div>
                      </div>
                      <p className="customer-text">{review.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4 responsive-wrap">
              <div className="contact-info">
                <MapComponent
                  latitude={parkingSpace.mapLong}
                  longitude={parkingSpace.mapLat}
                />
                {/*{parkingSpace.mapLat}*/}
                {/*{parkingSpace.mapLong}*/}
                <div className="address">
                  <span className="icon-location-pin"></span>
                  <p>{parkingSpace.city}</p>
                </div>
                <div className="address">
                  <span className="icon-screen-smartphone"></span>
                  <p>
                    {relation.Landlord ? relation.Landlord.phoneNumber : ""}
                  </p>
                </div>
                <div className="address">
                  <span className="icon-clock"></span>
                  <p>Senin - Minggu</p>
                  <p>00:00 am - 23:59 pm </p>
                  <a href="#" className="featured-open">
                    OPEN NOW
                  </a>
                </div>
                <a href="#" className="btn btn-outline-danger btn-contact">
                  SEND A MESSAGE
                </a>
              </div>
              <div className="follow">
                <div className="follow-img">
                  {relation.Landlord ? (
                    <>
                      <h6>{relation.Landlord.username}</h6>
                      <span>{parkingSpace.city}</span>
                    </>
                  ) : (
                    <>
                      <h6>Unknown Landlord</h6>
                      <span>{parkingSpace.city}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingDetail;
