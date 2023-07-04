import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchParkingSpaces } from "../../store/actions/index.js";
import { Link } from "react-router-dom";

const FeaturedListings = () => {
  const parkingSpaces = useSelector((state) => state.data.data);
  const reviews = useSelector((state) => state.reviewDetail.reviewDetail);
  const dispatch = useDispatch();
  console.log(parkingSpaces);
  useEffect(() => {
    dispatch(fetchParkingSpaces());
  }, [dispatch]);

  return (
    <section className="main-block featured-wrap">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="title-block">
              <h2>Parking Space Listings</h2>
              <p>Tempat parkir dengan rating tinggi di sini</p>
            </div>
          </div>
        </div>
        <div className="row">
          {parkingSpaces.map((space) => (
            <div className="col-md-4 card-2" key={space.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={space.mainImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{space.name}</h5>
                  {/*<ul className="card-rating">*/}
                  {/*  <li>{space.rating || "no rating yet"}</li>*/}
                  {/*  <li>{space.reviewCount || 0} ratings</li>*/}
                  {/*</ul>*/}
                  <p className="card-text">{space.description}</p>
                  <div className="card-bottom">
                    <p>
                      <i className="ti-location-pin"></i>
                      {space.city}
                    </p>
                  </div>
                  <Link
                    to={`/detail/${space.id}`}
                    className="btn btn-outline-primary"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
