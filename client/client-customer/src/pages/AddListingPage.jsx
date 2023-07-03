import React, {useEffect, useState} from 'react';
import MapComponent from "../components/MapComponent.jsx";
import {useDispatch} from "react-redux";
import {addParkingSpaces} from "../store/actions/index.js";

const AddListingPage = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setFormData(prevFormData => ({
            ...prevFormData,
            mapLat: position.coords.latitude,
            mapLong: position.coords.longitude,
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
    // landlordIdL: belum
    name: '',
    subtitle: '',
    description: '',
    city: '',
    stock: '',
    mapLong: '',
    mapLat: ''
  });



  if (latitude && longitude) {
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission, e.g., send data to the server
      console.log(formData);

      dispatch(addParkingSpaces(
        formData.name,
        formData.subtitle,
        formData.description,
        formData.city,
        formData.stock,
        formData.mapLong,
        formData.mapLat
      ));

      // Reset form data
      setFormData({
        name: '',
        subtitle: '',
        description: '',
        city: '',
        stock: '',
        mapLong: '',
        mapLat: ''
      });
    };


    // console.log(formData, '<--- form data AddListing')

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
                        <label>Stock</label>
                        <input
                          type="text"
                          className="form-control add-listing_form"
                          name="stock"
                          value={formData.stock}
                          onChange={handleInputChange}
                        />
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
