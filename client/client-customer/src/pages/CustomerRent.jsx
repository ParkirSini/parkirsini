import React, { useEffect } from "react";
import RentCard from "../components/CustomerRentComponents/RentCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookingByCustomerId } from "../store/actions";

const CustomerRent = () => {
  // const parkingSpaces = useSelector((state) => state.data.data);
  // const reviews = useSelector((state) => state.reviewDetail.reviewDetail);
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);

  console.log(bookings);
  useEffect(() => {
    dispatch(getBookingByCustomerId());
  }, [dispatch]);
  return (
    <section className="main-block featured-wrap">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="titile-block">
              <h2>Lahan Parkir</h2>
              <p>Daftar tempat parkir yang telah kamu sewa</p>
            </div>
          </div>
        </div>
        <div className="row">
          {bookings.map((booking) => {
            return <RentCard key={booking.id} booking={booking} />;
          })}

          {/* <div className="col-md-4 card-2">
            <div className="card">
              <img className="card-img-top" src="images/featured-img2.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Parkir Bagus</h5>
                <ul className="card-rating">
                  <li>4.5</li>
                  <li>38 ratings</li>
                </ul>
                <p className="card-text">Harga terjangkau dan dekat dengan perkantoran. Dilengkapi atap dan tidak
                  melanggar hukum, mobil teduh baik fisik dan peraturan.</p>
                <div className="card-bottom">
                  <p><i className="ti-location-pin"></i>Jakarta Timur</p>
                </div>
                <a href="fp/client/parkirSini/src/components#" className="btn btn-outline-primary">Lihat Detail</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CustomerRent;
