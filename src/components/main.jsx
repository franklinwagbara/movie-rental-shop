import React, { Component } from "react";
import "./css/theme.css";
import Banner from "./banner";
import Intro from "./intro";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="row center back-color">
        <Banner />
        <Intro />
        <Intro />
      </div>
    );
  }
}

export default Main;
