import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/index';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the login action
    dispatch(login(email, password));

    // Clear form fields after successful login
    setEmail('');
    setPassword('');

    // Redirect to another page after successful login
    navigate('/landlordListings')
  };

  return (
    <section className="main-block">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="listing-wrap">
              <form onSubmit={handleSubmit}>
                <div className="listing-title">
                  <h4>Login</h4>
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
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="btn-wrap btn-wrap2">
                      <button type="submit" className="btn btn-simple">
                        Login
                      </button>
                      <p>
                        Belum mendaftar?{' '}
                        <Link to="/reg">Daftar dulu di sini</Link>
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
  );
};

export default LoginPage;
