// import "../App.css";
import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import classes from "../App.css";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode} `}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>

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
                <NavLink
                  className={`nav-link ${(navInfo) =>
                    navInfo.isActive ? classes.active : ""}`}
                  aria-current="page"
                  to="/"
                >
                  {" "}
                  {props.nav_link_1}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(navInfo) =>
                    navInfo.isActive ? classes.active : ""}`}
                  aria-current="page"
                  to="/about"
                >
                  {" "}
                  {props.nav_link_2}
                </NavLink>
              </li>
            </ul>
            {/* <div className="d-flex">
              <div
                className="bg-primary rounded me-2"
                onClick={() => {
                  props.darkModeToggle("primary");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-danger rounded me-2"
                onClick={() => {
                  props.darkModeToggle("danger");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-success rounded me-2"
                onClick={() => {
                  props.darkModeToggle("success");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-info rounded me-2"
                onClick={() => {
                  props.darkModeToggle("info");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-light rounded me-2"
                onClick={() => {
                  props.darkModeToggle("light");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer",border:"2px solid grey" }}
              ></div>
              <div
                className="bg-dark border-2 rounded me-2"
                onClick={() => {
                  props.darkModeToggle("dark");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div> */}

            <div className="form-check form-switch">
              <input
                className="form-check-input me-2"
                type="checkbox"
                role="switch"
                aria-checked
                id="flexSwitchCheckDefault"
                onClick={props.darkModeToggle}
                // onClick={() => {
                //   props.darkModeToggle(null);
                // }}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {/* Enable dark mood */}
                {props.mode==="dark" ? "Disable dark mood":"Enable dark mood"}
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
