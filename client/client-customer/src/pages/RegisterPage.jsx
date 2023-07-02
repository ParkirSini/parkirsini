import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from "react-router-dom";
import {newLandlord} from "../store/actions/index.js";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(newLandlord(email, password, name, phoneNumber, address));
      navigate('/login')
      setEmail('');
      setPassword('');
      setName('');
      setPhoneNumber('');
      setAddress('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="main-block">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="listing-wrap">
                <form onSubmit={handleSubmit}>
                  <div className="listing-title">
                    <h4>Register</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control add-listing_form"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-control add-listing_form"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control add-listing_form"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            className="form-control add-listing_form"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <textarea
                            className="form-control add-listing_form"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="btn-wrap btn-wrap2">
                        <button type="submit" className="btn btn-simple">
                          Register
                        </button>
                        <p>
                          Sudah daftar?{' '}
                          <Link to="/login">Login di sini</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterPage
