import React from 'react';
import {useSelector} from "react-redux";

const Reserve = () => {
  const parkingSpace = useSelector(state => state.detail.detail);

  return (
    <>
    <section className="reserve-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Dukom Car Park</h5>
            <p>
              <span>$$$$$</span>
            </p>
            <p className="reserve-description">
              Tempat paling aman dan bersih, sudah pakai eskalator mobil guys! Mobil bagusmu akan merasa nyaman di sini.
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

      <section className="reserve-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>{parkingSpace.name}</h5>
              <p>
                <span>{parkingSpace.price}</span>
              </p>
              <p className="reserve-description">
                {parkingSpace.subtitle}
              </p>
            </div>
            <div className="col-md-6">
              <div className="reserve-seat-block">
                <div className="reserve-rating mx-0 mx-md-3">
                  <span>{parkingSpace.rating}</span>
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
