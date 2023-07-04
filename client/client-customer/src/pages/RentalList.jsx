import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParkingSpaceRelation } from '../store/actions';
import { useNavigate, useParams } from 'react-router-dom';

const RentalList = () => {
  const relation = useSelector((state) => state.relation.relation);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchParkingSpaceRelation(id));
      setTimeout(() => {
        setIsReady(true);
      }, 500);
    };

    fetchData();
  }, [dispatch, id]);

  const handleBackButtonClick = () => {
    navigate('/landlordListings');
  };

  // Render loading state if relation is not yet available or if not ready
  if (!relation || !isReady) {
    return <div></div>;
  }

  return (
    <>
      <div className="container-fluid" style={{ width: '80%', margin: '0 auto' }}>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="titile-block title-block_subpage">
              <h2>Detail Lahan Parkir</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ width: '80%', margin: '0 auto' }}>
        <button className="btn btn-primary" onClick={handleBackButtonClick}>
          ← Kembali
        </button>
        <br />
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <tbody>
              <tr>
                <td>Nama</td>
                <td>{relation.name}</td>
              </tr>
              <tr>
                <td>Harga</td>
                <td>Rp. {relation.price.toLocaleString('id-ID')} / 30 hari</td>
              </tr>
              <tr>
                <td>Foto Utama</td>
                <td>
                  <div style={{ width: '50%' }}>
                    <img src={relation.mainImg} alt="#" className="img-fluid" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Deskripsi</td>
                <td>
                  <p>{relation.subtitle}</p>
                </td>
              </tr>
              <tr>
                <td>Penyewa</td>
                <td style={{ verticalAlign: 'middle' }}>
                  {relation.Bookings ? (
                    relation.Bookings.map((booking) => <p key={booking.id}>{booking.customerId}</p>)
                  ) : (
                    <p>No bookings available</p>
                  )}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalList;
