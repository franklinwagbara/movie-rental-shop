import React, { Component } from "react";
import logo from "../assets/logo_colored_trans.png";
import "./css/logo.css";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="img" />
    </div>
  );
};

export default Logo;
