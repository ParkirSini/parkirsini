import React from 'react';

const FeaturedListings = () => {
  return (
    <section className="main-block featured-wrap">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="titile-block">
              <h2>Featured Listings</h2>
              <p>Tempat parkir dengan rating tinggi di sini</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 card-2">
            <div className="card">
              <img className="card-img-top" src="images/featured-img1.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Dukom Car Park</h5>
                <ul className="card-rating">
                  <li>5.0</li>
                  <li>62 ratings</li>
                </ul>
                <p className="card-text">Harga terjangkau dan dekat dengan perkantoran. Dilengkapi atap dan tidak
                  melanggar hukum, mobil teduh baik fisik dan peraturan.</p>
                <div className="card-bottom">
                  <p><i className="ti-location-pin"></i>Jakarta Timur</p>
                </div>
                <a href="fp/client/parkirSini/src/components#" className="btn btn-outline-primary">Lihat Detail</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 card-2">
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
          </div>

          <div className="col-md-4 card-2">
            <div className="card">
              <img className="card-img-top" src="images/featured-img3.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Parkit Mall</h5>
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
