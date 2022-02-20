import React, { Component } from "react";
import "./css/square.css";

class Square extends Component {
  state = {};
  render() {
    const { x, y, value } = this.props;
    return (
      <div>
        <button
          style={{ fontSize: "3rem" }}
          onClick={() => this.props.onPlay(x, y)}
        >
          {value}
        </button>
      </div>
    );
  }
}

export default Square;
