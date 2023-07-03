import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addParkingSpaces } from '../store/actions/index.js';
import MapComponent from '../components/MapComponent.jsx';

const AddListingPage = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setFormData(prevFormData => ({
            ...prevFormData,
            mapLat: position.coords.latitude.toString(),
            mapLong: position.coords.longitude.toString(),
          }));
        },
        error => {
          setError(error);
        }
      );
    } else {
      setError(new Error('Geolocation is not supported by this browser.'));
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    subtitle: '',
    description: '',
    city: '',
    stock: '',
    mapLong: '',
    mapLat: '',
    price: '',
    mainImg: '',
  });

  if (latitude && longitude) {
    const handleInputChange = event => {
      const { name, value } = event.target;
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    const handleSubmit = event => {
      event.preventDefault();
      console.log(formData);
      dispatch(
        addParkingSpaces(
          formData.name,
          formData.subtitle,
          formData.description,
          formData.city,
          formData.stock,
          formData.mapLong,
          formData.mapLat,
          formData.price,
          formData.mainImg
        )
      );
      setFormData({
        name: '',
        subtitle: '',
        description: '',
        city: '',
        stock: '',
        mapLong: '',
        mapLat: '',
        price: '',
        mainImg: '',
      });

      navigate('/landlordListings');
    };

    return (
      <>
        <section className="main-block">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="listing-wrap">
                  <form onSubmit={handleSubmit}>
                    <div className="listing-title">
                      <h4>General Information</h4>
                      <p>Data lahan parkir yang akan disewakan</p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Nama Tempat Parkir</label>
                            <input
                              type="text"
                              className="form-control add-listing_form"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>Subtitle</label>
                            <input
                              type="text"
                              className="form-control add-listing_form"
                              name="subtitle"
                              value={formData.subtitle}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              className="form-control add-listing_form"
                              name="description"
                              value={formData.description}
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <label>Stock</label>
                            <input
                              type="text"
                              className="form-control add-listing_form"
                              name="stock"
                              value={formData.stock}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            <input
                              type="text"
                              className="form-control add-listing_form"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>Price</label>
                            <input
                              type="text"
                              className="form-control add-listing_form"
                              name="price"
                              value={formData.price}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>Main Image</label>
                            <input
                              type="text"
                              className="form-control add-listing_form"
                              name="mainImg"
                              value={formData.mainImg}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      <MapComponent latitude={latitude} longitude={longitude} />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="btn-wrap btn-wrap2">
                          <button type="submit" className="btn btn-simple">
                            SUBMIT LISTING
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default AddListingPage;
