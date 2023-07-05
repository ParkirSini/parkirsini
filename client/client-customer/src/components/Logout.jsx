import React from 'react'
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

const Logout = () => {

  function handleLogout() {
    localStorage.clear();
  }

  return (
    <>
      <Link to="/" className="btn btn-warning btn-lg btn-block" onClick={handleLogout}>
        Logout
      </Link>
    </>
  )
}

export default Logout
