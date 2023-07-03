import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchParkingSpaces } from '../store/actions';

const ResultPage = () => {
  const parkingSpaces = useSelector((state) => state.data.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParkingSpaces());
  }, [dispatch]);

  return (
    <>
      <section className="main-block featured-wrap">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="titile-block">
                <h2>Hasil Pencarian</h2>
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

      </div>
    </section>

      <h1>di bawah ini hasil redux json-server</h1>
      <section className="main-block featured-wrap">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="titile-block">
                <h2>Hasil Pencarian</h2>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              {parkingSpaces.map((parkingSpace) => (
                <div className="col-md-6 col-lg-3 article-first" key={parkingSpace.id}>
                  <div className="news-block">
                    {/* Display the first image as the image source */}
                    {parkingSpace.images.length > 0 && (
                      <img src={parkingSpace.images[0].imgUrl} alt="#" className="img-fluid"
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover'
                        }}
                      />
                    )}
                    <div className="news-title">
                      <p>Rating {parkingSpace.rating}</p>
                      <h5>{parkingSpace.name}</h5>
                      <p className="blog2-thumbnail-name">{parkingSpace.subtitle}</p>
                      <a href="blog-detail.html" className="blog2-link">Lihat ➝</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResultPage
