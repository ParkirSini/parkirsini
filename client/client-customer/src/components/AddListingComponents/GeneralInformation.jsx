import React, { useState } from 'react';

const GeneralInformation = () => {
  const [namaTempat, setNamaTempat] = useState('');
  const [contactPerson, setContactPerson] = useState('');

  const handleNamaTempatChange = e => {
    setNamaTempat(e.target.value);
  };

  const handleContactPersonChange = e => {
    setContactPerson(e.target.value);
  };

  return (
    <div className="listing-title">
      <h4>General Information</h4>
      <p>Write Something General Information About Your Listing</p>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Nama Tempat</label>
            <input type="text" className="form-control add-listing_form" value={namaTempat} onChange={handleNamaTempatChange} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Contact Person</label>
            <input type="text" className="form-control add-listing_form" value={contactPerson} onChange={handleContactPersonChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInformation;
