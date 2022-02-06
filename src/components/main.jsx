import React, { Component } from "react";
import "./css/theme.css";
import Banner from "./banner";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="row back-color">
        <Banner />
      </div>
    );
  }
}

export default Main;
