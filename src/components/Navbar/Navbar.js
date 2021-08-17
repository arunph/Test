import React from "react";
import "./Navbar.scss";
import spacex_logo from '../../assets/spacex-logo.png'

const Navbar = () => {
  return (
    <div className="navbar d-flex justify-content-center align-items-center">
    <img src={spacex_logo} alt="spacex-logo" />
    </div>
  );
};

export default Navbar;
