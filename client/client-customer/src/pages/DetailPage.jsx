// <<<<<<< malik-1
// import BookingDetail from "../components/DetailPageComponents/BookingDetail.jsx";
// import Reserve from "../components/DetailPageComponents/Reserve.jsx";
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchParkingSpace } from "../store/actions/index.js";

// const DetailPage = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const [loading, setLoading] = useState(false);
//   const parkingSpace = useSelector((state) => {
//     return state.parkingSpace.parkingSpace;
//   });
//   console.log(parkingSpace);
//   //   console.log(productDetail);
//   //   console.log(productId, "<<<<<<<<<<<<<<");

//   useEffect(() => {
//     console.log("masukkkkkkkkkkkkkkkkkk");
//     dispatch(fetchParkingSpace(id));
//     setLoading(true);
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (parkingSpace) {
//       if (Object.keys(parkingSpace).length) {
//         setLoading(false);
//       }
//     }
//   }, [parkingSpace]);
//   return (
//     <>
//       <Reserve park={parkingSpace} />
//       <BookingDetail park={parkingSpace} />
// =======
import React, {useEffect} from 'react'
import BookingDetail from "../components/DetailPageComponents/BookingDetail.jsx";
import Reserve from "../components/DetailPageComponents/Reserve.jsx";
import { fetchParkingSpacesDetail } from '../store/actions/index';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const DetailPage = () => {
  const dispatch = useDispatch();
  const parkingSpace = useSelector(state => state.detail.detail);
  const loading = useSelector(state => state.detail.loading);
  const error = useSelector(state => state.detail.error);
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchParkingSpacesDetail(id));
    // dispatch(fetchParkingSpacesDetail());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Reserve parkingSpace={parkingSpace} />
      <BookingDetail parkingSpace={parkingSpace} />
    </>
  );
};

export default DetailPage;
