import React from 'react';

const DetailedItem = () => {
  return (
    <section className="main-block gray">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="grid">
              <figure className="effect-chico">
                <img src="images/gal1.jpg" alt="#" className="img-fluid" />
                <figcaption>
                  <div className="effect-caption-wrap">
                    <h2>Jakarta</h2>
                    <p>1500+ Listings</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row detailed-item-mr">
              <div className="col-md-12">
                <div className="grid">
                  <figure className="effect-chico">
                    <img src="images/gal2.jpg" alt="#" className="img-fluid" />
                    <figcaption>
                      <div className="effect-caption-wrap">
                        <h2>Bekasi</h2>
                        <p>300+ Listings</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="grid">
                  <figure className="effect-chico">
                    <img src="images/gal3.jpg" alt="#" className="img-fluid" />
                    <div className="effect-caption-wrap">
                      <h2>Bandung</h2>
                      <p>800+ Listings</p>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="col-md-6">
                <div className="grid">
                  <figure className="effect-chico">
                    <img src="images/gal4.jpg" alt="#" className="img-fluid" />
                    <div className="effect-caption-wrap">
                      <h2>Surabaya</h2>
                      <p>210+ Listings</p>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedItem;
