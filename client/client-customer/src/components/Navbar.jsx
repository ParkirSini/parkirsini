import React, {useState} from 'react'
import logo from '../assets/images/fp-logo.png';
import {Link} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {

  return (
    <>
      {/*navbar utama*/}
      <div className="nav-menu sticky-top">
        <div className="bg transition">
          <div className="container-fluid fixed">
            <div className="row">
              <div className="col-md-12">
                <Navbar expand="lg">
                  <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" />
                  </Link>

                  <Navbar.Toggle aria-controls="navbarNavDropdown" className="navbar-toggler">
                    <span className="ti-menu"></span>
                  </Navbar.Toggle>
                  <Navbar.Collapse id="navbarNavDropdown" className="collapse navbar-collapse justify-content-end">
                    <Nav className="navbar-nav">
                      <Nav.Item>
                        <Nav.Link as={Link} to="/">
                          Home
                        </Nav.Link>
                      </Nav.Item>
                      <NavDropdown title="Halaman Customer" id="nav-dropdown">
                        <NavDropdown.Item as={Link} to="/detail/1">
                          Detail Page
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/thankyou-payment">
                          Thank You Payment
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/rented">
                          Lahan Disewa
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/result">
                          Hasil Pencarian
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Halaman Landlord" id="nav-dropdown">
                        <NavDropdown.Item as={Link} to="/add-listing">
                          Add Listing
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/landlordListings">
                          Landlord Listings
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/thankyou-listing">
                          Thank You Listing
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/login">
                          Login
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/approval">
                          Approval
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*modal signpup login*/}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="login" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">LOGIN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="sign-up" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">SIGN UP</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="login">
                <div className="modal-header">
                  <h5 className="modal-title"><img src={logo} alt="logo" /></h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span className="ti-close"></span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control add-listing_form" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control add-listing_form" placeholder="Password" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="btn btn-primary">LOG IN</button>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="sign-up">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"><img src={logo} alt="logo" /></h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span className="ti-close"></span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control add-listing_form" id="name" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control add-listing_form" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control add-listing_form" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control add-listing_form" id="password" placeholder="Password" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="btn btn-primary">CREATE ACCOUNT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default NavigationBar
