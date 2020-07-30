import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <div className="header-section animate__animate animate__fadeInDown">
      <div className="logo-wrapper">
        <img src="src/components/logo/logo192.png" alt="My Logo" />
      </div>
      <div className="content-wrapper">
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-link">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-link">
          <Link to="/service">Services</Link>
        </div>
      </div>
      <div className="social-icon-links">
        <div className="icon-link">
          <a href="https://twitter.com/thedarekeys" target="_blank">
            <i className="twitter icon"></i>
          </a>
        </div>
        <div className="icon-link">
          <a
            href="https://web.facebook.com/ebenezer.kolawole.7547"
            target="_blank"
          >
            <i className="facebook icon"></i>
          </a>
        </div>
        <div className="icon-link">
          {" "}
          <a href="https://www.instagram.com/kolawale1234/" target="_blank">
            <i className="instagram icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
