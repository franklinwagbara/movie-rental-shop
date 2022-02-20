import React, { Component } from "react";
import "./css/prompt.css";

class Prompt extends Component {
  state = {};
  render() {
    return (
      <div className="prompt" style={{ fontSize: "2rem" }}>
        <div className="players">
          <h3>X - Player 1</h3>
          <h3>O - Player 2</h3>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>
            Player {this.props.player + 1}
          </span>
          , it is you turn!
        </div>
      </div>
    );
  }
}

export default Prompt;
