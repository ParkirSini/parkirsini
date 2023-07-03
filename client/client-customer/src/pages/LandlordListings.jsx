import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, useParams} from "react-router-dom";
import {fetchLandlordDetail, fetchParkingSpacesByLandlord} from "../store/actions/index.js";

const LandlordListings = () => {
  const landlordDetail = useSelector((state) => state.landlordDetail.landlordDetail);
  const parkingSpaces = useSelector((state) => state.dataByLandlord.dataByLandlord);
  const dispatch = useDispatch();
  console.log(parkingSpaces)

  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchLandlordDetail(id)); // Pass the desired id to the action
    dispatch(fetchParkingSpacesByLandlord())
  }, []);

  console.log(parkingSpaces, '<---landlordListings')

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="titile-block title-block_subpage">
              <h2>Daftar Lahan Parkir Milik Anda</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {parkingSpaces.map(space => (
            <div className="col-md-6 col-lg-3 article-first" key={space.id}>
              <div className="news-block">
                <img src={space.mainImg} alt="#" className="img-fluid" />
                <div className="news-title">
                  <p>Rp. {space.price}</p>
                  <h5>{space.name}</h5>
                  <p className="blog2-thumbnail-name">{space.description}</p>
                  <Link to={`/detail/${space.id}`} className="blog2-link">Lihat ➝</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default LandlordListings;
