import React from 'react';

const Amenities = () => {
  return (
    <div>
      <div className="listing-title">
        <span className="ti-gift"></span>
        <h4>Amenities</h4>
        <p>Write Something General Information About Your Listing</p>
      </div>

      <div className="row">
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i1" type="checkbox" />
            <label htmlFor="i1">Alarm system</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i2" type="checkbox" />
            <label htmlFor="i2">Laundry room in building</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i3" type="checkbox" />
            <label htmlFor="i3">Elevator</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i4" type="checkbox" />
            <label htmlFor="i4">Depanneur in building</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i5" type="checkbox" />
            <label htmlFor="i5">Door attendant</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i6" type="checkbox" />
            <label htmlFor="i6">Wheelchair accessible</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i7" type="checkbox" />
            <label htmlFor="i7">Onsite management</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i8" type="checkbox" />
            <label htmlFor="i8">Street parking</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i9" type="checkbox" />
            <label htmlFor="i9">Heating</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i11" type="checkbox" />
            <label htmlFor="i11">Janitor</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i12" type="checkbox" />
            <label htmlFor="i12">Intercom</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i13" type="checkbox" />
            <label htmlFor="i13">Hot water</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i14" type="checkbox" />
            <label htmlFor="i14">Security cameras</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i15" type="checkbox" />
            <label htmlFor="i15">Attached garage</label>
          </div>
        </div>
        <div className="col-md-4 responsive-wrap">
          <div className="md-checkbox">
            <input id="i16" type="checkbox" />
            <label htmlFor="i16">Electricity</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="btn-wrap btn-wrap2">
            <a href="#" className="btn btn-simple">SUBMIT LISTING</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
