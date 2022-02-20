import React, { Component } from "react";
import "./css/winner.css";

class Winner extends Component {
  state = {};

  getWinner() {
    if (this.props.winner === 0) return <p>Tie</p>;
    else return <p>The winner is player {this.props.winner}</p>;
  }

  render() {
    return (
      <div className="display">
        {this.getWinner()}
        <button
          onClick={() => this.props.onRestart()}
          className="btn btn-secondary"
        >
          Restart
        </button>
      </div>
    );
  }
}

export default Winner;
