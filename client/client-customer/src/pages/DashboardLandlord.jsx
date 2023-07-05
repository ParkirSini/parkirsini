import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {fetchCustomers, fetchParkingSpaceRelation} from "../store/actions/index.js";
import {useDispatch, useSelector} from "react-redux";
import Logout from "../components/Logout.jsx";

const DashboardLandlord = () => {
  // const relation = useSelector((state) => state.relation.relation);
  // const dispatch = useDispatch();
  // const [isReady, setIsReady] = useState(false);
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await dispatch(fetchParkingSpaceRelation(id));
  //     await dispatch(fetchCustomers());
  //     setTimeout(() => {
  //       setIsReady(true);
  //     }, 500);
  //   };
  //
  //   fetchData();
  // }, [dispatch, id]);
  //
  // if (!relation || !isReady) {
  //   return <div></div>;
  // }
  // console.log(relation)
  return (
    <div className="container-fluid" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <Logout />
      </div>
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
