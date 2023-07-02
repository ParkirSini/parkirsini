import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/swiper.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";
import MapComponent from "../MapComponent.jsx";

const CustomPrevArrow = ({ onClick }) => (
  <button type="button" className="custom-prev-arrow btn btn-link" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button type="button" className="custom-next-arrow btn btn-link" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

const ImageSlider = () => {
  const parkingSpace = useSelector(state => state.detail.detail)

  const handlePrevArrowClick = () => {
    sliderRef.slickPrev();
  };

  const handleNextArrowClick = () => {
    sliderRef.slickNext();
  };

  let sliderRef;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      if (sliderRef) {
        sliderRef.slickGoTo(next);
      }
    }
  };

  if (!parkingSpace || !parkingSpace.images || parkingSpace.images.length === 0) {
    return null; // Return null or a placeholder if data is not available
  }

  return (
    <>
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="image-slider-container">
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
          <div>
            <div className="image-slide">
              <img
                src="https://asset-2.tstatic.net/tribunnews/foto/images/preview/20140430_212600_parkir-di-dukomsel-bandung.jpg"
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="image-slide">
              <img
                src="https://asset-2.tstatic.net/tribunnews/foto/images/preview/20140430_212637_parkir-di-dukomsel-bandung.jpg"
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="image-slide">
              <img
                src="https://asset-2.tstatic.net/tribunnews/foto/images/preview/20140430_212346_parkir-di-dukomsel-bandung.jpg"
                alt="#"
              />
            </div>
          </div>
        </Slider>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <CustomPrevArrow onClick={handlePrevArrowClick} />
        <CustomNextArrow onClick={handleNextArrowClick} />
      </div>
    </div>

    <h1>di bawah ini pakai redux json-server</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="image-slider-container">
          <Slider ref={slider => (sliderRef = slider)} {...settings}>
            {parkingSpace.images.map((image, index) => (
              <div key={index}>
                <div className="image-slide">
                  <img src={image.imgUrl} alt="#" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/*<MapComponent latitude={parkingSpace.mapLat} longitude={parkingSpace.mapLong} />*/}
        {/*{parkingSpace.mapLat}*/}
        {/*{parkingSpace.mapLong}*/}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <CustomPrevArrow onClick={handlePrevArrowClick} />
          <CustomNextArrow onClick={handleNextArrowClick} />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
