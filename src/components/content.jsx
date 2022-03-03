import React, { Component } from "react";
import Movies from "./movies";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Movies />
      </div>
    );
  }
}

export default Content;
