import React, { Component } from "react";
import "./css/theme.css";
import "./css/navbar.css";
import Logo from "./logo";
import logo from "../assets/logo_trans.png";

const NavBar = () => {
  const url = logo;
  return (
    <div>
      <nav className="row navbar navbar-expand-md back-color">
        <div className="col-8">
          <a className="navbar-brand" href="#">
            <Logo url={url} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
