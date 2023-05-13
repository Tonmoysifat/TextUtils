// import "../App.css";
import React from "react";
import PropTypes from "prop-types";
import {Link, NavLink} from 'react-router-dom'
import classes from "../App.css";


export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode} `}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            {props.title}</Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/"> {props.nav_link_1}</a> */}
              
                <NavLink className={`nav-link ${(navInfo)=> (navInfo.isActive ? classes.active : "")}`} aria-current="page" to="/"> {props.nav_link_1}</NavLink>
                
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about.html">
                  {props.nav_link_2}
                </a> */}
                  <NavLink className={`nav-link ${(navInfo)=> (navInfo.isActive ? classes.active : "")}`}  aria-current="page" to="/about"> {props.nav_link_2}</NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            <div className="form-check form-switch">
              <input
                className="form-check-input me-2"
                type="checkbox"
                role="switch"
                aria-checked
                id="flexSwitchCheckDefault"
                onClick={props.darkModeToggle}
              />
              <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">
              Enable dark mood
              {/* <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                onClick={props.darkModeToggle}
              >
                
               
              </label> */}
              {/* <label
                className="form-check-label greenbtn"
                htmlFor="flexSwitchCheckDefault"
                onClick={props.darkModeToggle_2}
              > */}
                
                
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  nav_link_1: PropTypes.string,
  nav_link_2: PropTypes.string,
};
Navbar.defaultProps = {
  title: "TextUtils",
  nav_link_1: "Home",
  nav_link_2: "About Us",
};





