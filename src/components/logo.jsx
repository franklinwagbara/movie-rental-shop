import React, { Component } from "react";
import "./css/logo.css";

const Logo = ({ url }) => {
  return (
    <div>
      <img src={url} alt="logo" className="img" />
    </div>
  );
};

export default Logo;
