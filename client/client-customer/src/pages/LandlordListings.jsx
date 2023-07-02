import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import {fetchLandlordDetail} from "../store/actions/index.js";

const LandlordListings = () => {
  const landlordDetail = useSelector((state) => state.landlordDetail.landlordDetail);
  const dispatch = useDispatch();

  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchLandlordDetail(id)); // Pass the desired id to the action
  }, []);

  if (landlordDetail) {
    console.log(landlordDetail);
  }

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
          <div className="col-md-6 col-lg-3 article-first">
            <div className="news-block">
              <img src="images/article-img1.jpg" alt="#" className="img-fluid" />
              <div className="news-title">
                <p>Rating 4.5</p>
                <h5>Dukom Car Park</h5>
                <p className="blog2-thumbnail-name">Tempat paling aman dan bersih, sudah pakai eskalator mobil guys! Mobil bagusmu akan merasa nyaman di sini.</p>
                <a href="blog-detail.html" className="blog2-link">Lihat ➝</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandlordListings
