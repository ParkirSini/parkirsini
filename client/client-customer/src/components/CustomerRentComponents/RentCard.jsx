import { useNavigate } from "react-router-dom";

function RentCard({ booking }) {
  let jumlahRating = 0;
  const navigate = useNavigate();
  booking.ParkingSpace?.ParkingSpaceReviews?.forEach((el) => {
    jumlahRating += el.rating;
  });

  function goToDetail(id) {
    navigate(`/detail/${id}`);
  }
  return (
    <>
      <div className="col-md-4 card-2">
        <div className="card">
          <img
            className="card-img-top"
            src={booking.ParkingSpace?.mainImg}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{booking.ParkingSpace?.name}</h5>
            <ul className="card-rating">
              <li>
                {jumlahRating /
                  booking.ParkingSpace?.ParkingSpaceReviews?.length}
              </li>
              <li>
                {booking.ParkingSpace?.ParkingSpaceReviews?.length} ratings
              </li>
            </ul>
            <p className="card-text">duration : {booking.duration} hari</p>
            <p className="card-text">paid : {booking.paid.toString()}</p>

            <p className="card-text">{booking.ParkingSpace?.description}</p>
            <div className="card-bottom">
              <p>
                <i className="ti-location-pin"></i>
                {booking.ParkingSpace?.city}
              </p>
            </div>
            <button
              onClick={() => goToDetail(booking.ParkingSpace?.id)}
              className="btn btn-outline-primary"
            >
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RentCard;
