import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const navigate = useNavigate();
  const parkingSpace = useSelector((state) => state.detail.detail);
  const reviews = useSelector((state) => state.reviewDetail.reviewDetail);
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((total, review) => total + review.rating, 0) /
        reviews.length
      : "no rating yet";

  const creteBooking = async () => {
    // const { amount, email, parkingSpaceId, price } = req.body
    try {
      const response = await fetch(
        "http://localhost:3000/booking/create-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.access_token,
          },
          body: JSON.stringify({
            amount: parkingSpace.price,
            email: parkingSpace.Landlord?.email,
            parkingSpaceId: parkingSpace.id,
            price: parkingSpace.price,
          }),
        }
      );
      if (response.ok) {
        setTimeout(function () {
          // Kode yang akan dijalankan setelah jangka waktu tertentu
          navigate("/rented");
        }, 2000); // Waktu ditentukan dalam milidetik (dalam contoh ini, 2000 ms atau 2 detik)
        navigate("/thankyou-payment");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePayment = async () => {
    console.log("masukkk");

    try {
      // Mengirimkan permintaan ke server untuk menghasilkan token pembayaran
      const response = await fetch(
        "http://localhost:3000/booking/generate-midtrans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.access_token,
          },
          body: JSON.stringify({
            amount: parkingSpace.price,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        // console.log(data, "<<<<<<<<<<<<<<<");
        let cb = creteBooking;
        window.snap.pay(data.token, {
          onSuccess: function () {
            /* You may add your own implementation here */
            console.log("Succes bayar bos");
            cb();
          },
        });
      }
    } catch (error) {
      console.error("Payment error:", error);
      // Handle kesalahan pembayaran
    }
  };

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
              <p className="reserve-description">{parkingSpace.subtitle}</p>
            </div>
            <div className="col-md-6">
              <div className="reserve-seat-block">
                <div className="reserve-rating mx-0 mx-md-3">
                  <span>{averageRating}</span>
                </div>
                <div className="reserve-btn">
                  <div className="featured-btn-wrap">
                    <button
                      onClick={() => handlePayment(parkingSpace.id)}
                      className="btn btn-danger"
                    >
                      SEWA PARKIR
                    </button>
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

export default Reserve;
