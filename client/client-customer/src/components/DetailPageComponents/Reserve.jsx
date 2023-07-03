import React from "react";

const Reserve = ({ park }) => {
  return (
    <section className="reserve-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>{park.name}</h5>
            <p>
              <span>{park.price}</span>
            </p>
            <p className="reserve-description">
              Tempat paling aman dan bersih, sudah pakai eskalator mobil guys!
              Mobil bagusmu akan merasa nyaman di sini.
            </p>
          </div>
          <div className="col-md-6">
            <div className="reserve-seat-block">
              <div className="reserve-rating mx-0 mx-md-3">
                <span>4.5</span>
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
  );
};

export default Reserve;
