import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLandlord = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="titile-block title-block_subpage text-center mb-4">
            <h2>Selamat Datang, Pemilik Lahan Parkir!</h2>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-4 text-center mb-5">
          <Link to="/add-listing" className="btn btn-primary btn-lg btn-block">
            Tambah Lahan Parkir
          </Link>
        </div>
        <div className="col-md-4 text-center mb-5">
          <Link to="/landlordListings" className="btn btn-primary btn-lg btn-block">
            Daftar Lahan Parkir
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardLandlord;
