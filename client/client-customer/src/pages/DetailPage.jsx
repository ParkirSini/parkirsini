import BookingDetail from "../components/DetailPageComponents/BookingDetail.jsx";
import Reserve from "../components/DetailPageComponents/Reserve.jsx";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchParkingSpace } from "../store/actions/index.js";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const parkingSpace = useSelector((state) => {
    return state.parkingSpace.parkingSpace;
  });
  console.log(parkingSpace);
  //   console.log(productDetail);
  //   console.log(productId, "<<<<<<<<<<<<<<");

  useEffect(() => {
    console.log("masukkkkkkkkkkkkkkkkkk");
    dispatch(fetchParkingSpace(id));
    setLoading(true);
  }, [dispatch, id]);

  useEffect(() => {
    if (parkingSpace) {
      if (Object.keys(parkingSpace).length) {
        setLoading(false);
      }
    }
  }, [parkingSpace]);
  return (
    <>
      <Reserve park={parkingSpace} />
      <BookingDetail park={parkingSpace} />
    </>
  );
};

export default DetailPage;
