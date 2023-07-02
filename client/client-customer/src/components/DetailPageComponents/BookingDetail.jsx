import React from 'react';
import { useSelector } from 'react-redux';
import ImageSlider from "./ImageSlider.jsx";
import MapComponent from "../MapComponent.jsx";

const BookingDetail = () => {
  const parkingSpace = useSelector(state => state.detail.detail);

  return (
    <>
    <section className="gray-dark booking-details_wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-8 responsive-wrap">
            <div className="booking-checkbox_wrap">
              <ImageSlider />
              <div className="booking-checkbox">
                <p>
                  Layanan sewa lahan parkir yang terbaik, teknologi terbaru dan kebersihan yang terjamin. Kalau kamu punya mobil premium dan butuh tempat yang jamin keamanan mobil kamu, hilangkan resiko mobil tergores atau terbentur dengan adanya space antar satu mobil dengan mobil lainnya.
                </p>
                <p>
                  Fasilitas yang berbeda dengan tempat parkir pada umumnya, pencahayaan yang sangat cukup dan terbebas dari adanya hewan liar membuat kondisi cat selalu dalam kondisi terbaik. Mobil kamu juga akan terbebas dari kejahilan orang, dibandingkan lokasi parkir pada umumnya.
                </p>
                <hr />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label className="custom-checkbox">
                    <span className="ti-check-box"></span>
                    <span className="custom-control-description">Keamanan 24 Jam</span>
                  </label>
                  <label className="custom-checkbox">
                    <span className="ti-check-box"></span>
                    <span className="custom-control-description">Wireless Internet</span>
                  </label>
                </div>
                <div className="col-md-4">
                  <label className="custom-checkbox">
                    <span className="ti-check-box"></span>
                    <span className="custom-control-description">Atap Tertutup</span>
                  </label>
                  <label className="custom-checkbox">
                    <span className="ti-check-box"></span>
                    <span className="custom-control-description">No Smoking</span>
                  </label>
                </div>
                <div className="col-md-4">
                  <label className="custom-checkbox">
                    <span className="ti-check-box"></span>
                    <span className="custom-control-description">Lantai Plestered</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="booking-checkbox_wrap booking-your-review">
              <h5>Write a Review</h5>
              <hr />
              <div className="customer-review_wrap">
                <div className="customer-img">
                  <img src="images/avatar.jpg" className="img-fluid" alt="#" />
                </div>
                <div className="customer-content-wrap">
                  <div className="your-rating-wrap">
                    <span>Your rating</span>
                    <div className="customer-review">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="round-icon-blank"></span>
                    </div>
                  </div>
                  <div className="your-comment-wrap">
                    <textarea name="#" className="your-rating-content" placeholder="Enter Your Comments"></textarea>
                    <h6 className="your-rating-notify">at least 140 characters</h6>
                  </div>

                  <div className="row">
                    <div className="col-md-4 mr-auto">
                      <div className="add-photos-link mb-3 mb-md-0">
                        <a href="#"><i className="icon-picture"></i>Add Photos</a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="your-rating-btn">
                        <a href="#" className="btn btn-danger btn-block">Publish Review</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-checkbox_wrap my-4">
              <h4>34 Reviews</h4>
              <hr />
              <div className="customer-review_wrap">
                <div className="customer-img">
                  <img src="images/customer-img1.jpg" className="img-fluid" alt="#" />
                  <p>Amanda G</p>
                  <span>35 Reviews</span>
                </div>
                <div className="customer-content-wrap">
                  <div className="customer-content">
                    <div className="customer-review">
                      <h5>Best noodles in the Newyork city</h5>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="round-icon-blank"></span>
                      <p>Reviewed 2 days ago</p>
                    </div>
                    <div className="customer-rating">8.0</div>
                  </div>
                  <p className="customer-text">I love the noodles here but it is so rare that I get to come here. Tasty Hand-Pulled Noodles is the best type of whole in the wall restaurant. The staff are really nice, and you should be seated quickly. I usually get the hand pulled noodles in a soup. House Special #1 is amazing and the lamb noodles are also great. If you want your noodles a little chewier, get the knife cut noodles, which are also amazing. Their dumplings are great dipped in their chili sauce. </p>
                  <p className="customer-text">I love how you can see into the kitchen and watch them make the noodles and you can definitely tell that this is a family run establishment. The prices are are great with one dish maybe being $9. You just have to remember to bring cash.</p>
                  <ul>
                    <li><img src="images/review-img1.jpg" className="img-fluid" alt="#" /></li>
                    <li><img src="images/review-img2.jpg" className="img-fluid" alt="#" /></li>
                    <li><img src="images/review-img3.jpg" className="img-fluid" alt="#" /></li>
                  </ul>
                  <span>28 people marked this review as helpful</span>
                  <a href="#"><span className="icon-like"></span>Helpful</a>
                </div>
              </div>
              <hr />
              <div className="customer-review_wrap">
                <div className="customer-img">
                  <img src="images/customer-img2.jpg" className="img-fluid" alt="#" />
                  <p>Kevin W</p>
                  <span>17 Reviews</span>
                </div>
                <div className="customer-content-wrap">
                  <div className="customer-content">
                    <div className="customer-review">
                      <h5>A hole-in-the-wall old school shop.</h5>
                      <span className="customer-rating-red"></span>
                      <span className="round-icon-blank"></span>
                      <span className="round-icon-blank"></span>
                      <span className="round-icon-blank"></span>
                      <span className="round-icon-blank"></span>
                      <p>Reviewed 3 months ago</p>
                    </div>
                    <div className="customer-rating customer-rating-red">2.0</div>
                  </div>
                  <p className="customer-text">The dumplings were so greasy...the pan-fried shrimp noodles were the same. So much oil and grease it was difficult to eat. The shrimp noodles only come with 3 shrimp (luckily the dish itself is cheap) </p>
                  <p className="customer-text">The beef noodle soup was okay. I added black vinegar into the broth to give it some extra flavor. The soup has bok choy which I liked - it's a nice textural element. The shop itself is really unclean (which is the case in many restaurants in Chinatown) They don't wipe down the tables after customers have eaten. If you peak into the kitchen many of their supplies are on the ground which is unsettling... </p>
                  <span>10 people marked this review as helpful</span>
                  <a href="#"><span className="icon-like"></span>Helpful</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 responsive-wrap">
            <div className="contact-info">
              <img src="images/map.jpg" className="img-fluid" alt="#" />
              <div className="address">
                <span className="icon-location-pin"></span>
                <p> Jl. Sudirman No. 1<br /> Jakarta Pusat, 10013<br /> b/t Division St &amp; St James Pl <br /> Chinatown, Civic Center</p>
              </div>
              <div className="address">
                <span className="icon-screen-smartphone"></span>
                <p> +44 20 7336 8898</p>
              </div>
              <div className="address">
                <span className="icon-clock"></span>
                <p>Senin - Minggu</p>
                <p>00:00 am - 23:59 pm </p>
                <a href="#" className="featured-open">OPEN NOW</a>
              </div>
              <a href="#" className="btn btn-outline-danger btn-contact">SEND A MESSAGE</a>
            </div>
            <div className="follow">
              <div className="follow-img">
                <img src="images/follow-img.jpg" className="img-fluid" alt="#" />
                <h6>Christian Sugiono</h6>
                <span>Jakarta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <h1>di bawah ini pakai redux json-server</h1>
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
                <div className="row">
                  <div className="col-md-4">
                    <label className="custom-checkbox">
                      <span className="ti-check-box"></span>
                      <span className="custom-control-description">Keamanan 24 Jam</span>
                    </label>
                    <label className="custom-checkbox">
                      <span className="ti-check-box"></span>
                      <span className="custom-control-description">Wireless Internet</span>
                    </label>
                  </div>
                  <div className="col-md-4">
                    <label className="custom-checkbox">
                      <span className="ti-check-box"></span>
                      <span className="custom-control-description">Atap Tertutup</span>
                    </label>
                    <label className="custom-checkbox">
                      <span className="ti-check-box"></span>
                      <span className="custom-control-description">No Smoking</span>
                    </label>
                  </div>
                  <div className="col-md-4">
                    <label className="custom-checkbox">
                      <span className="ti-check-box"></span>
                      <span className="custom-control-description">Lantai Plestered</span>
                    </label>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4 responsive-wrap">
              <div className="contact-info">
                <MapComponent latitude={parkingSpace.mapLong} longitude={parkingSpace.mapLat} />
                {/*{parkingSpace.mapLat}*/}
                {/*{parkingSpace.mapLong}*/}
                <div className="address">
                  <span className="icon-location-pin"></span>
                  <p>{parkingSpace.city}</p>
                </div>
                <div className="address">
                  <span className="icon-screen-smartphone"></span>
                  <p> +44 20 7336 8898</p>
                </div>
                <div className="address">
                  <span className="icon-clock"></span>
                  <p>Senin - Minggu</p>
                  <p>00:00 am - 23:59 pm </p>
                  <a href="#" className="featured-open">OPEN NOW</a>
                </div>
                <a href="#" className="btn btn-outline-danger btn-contact">SEND A MESSAGE</a>
              </div>
              <div className="follow">
                <div className="follow-img">
                  <img src="images/follow-img.jpg" className="img-fluid" alt="#" />
                  <h6>Christian Sugiono</h6>
                  <span>Jakarta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default BookingDetail
