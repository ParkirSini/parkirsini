import React, { useState } from 'react';

const AddLocation = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');

  return (
    <div className="listing-title">
      <h4>Add Location</h4>
      <p>Write Something General Information About Your Location</p>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control add-listing_form" value={address} onChange={e => setAddress(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>City</label>
            <select className="form-control add-listing_form" value={city} onChange={e => setCity(e.target.value)}>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Phoenix</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>State</label>
            <select className="form-control add-listing_form" value={state} onChange={e => setState(e.target.value)}>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Phoenix</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Country</label>
            <input type="text" className="form-control add-listing_form" value={country} onChange={e => setCountry(e.target.value)} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Zip-Code</label>
            <input type="text" className="form-control add-listing_form" value={zipCode} onChange={e => setZipCode(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLocation;
