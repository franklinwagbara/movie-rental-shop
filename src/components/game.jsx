import React, { Component } from "react";
import Grid from "./grid";
import Winner from "./winner";
import Prompt from "./prompt";
import "./css/game.css";

class Game extends Component {
  state = {
    grid: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    player: 0,
    winner: null,
  };

  handlePlay = (x, y) => {
    const grid = [...this.state.grid];
    let player = this.state.player;

    if (grid[y][x] === "") {
      grid[y][x] = this.state.player === 0 ? "X" : "O";
      player ^= 1;
      this.setState({ grid, player });
    }

    let winner = this.getWinner();

    if (this.noWinner() === true) winner = 0;
    this.setState({ winner });
  };

  noWinner = () => {
    const { grid } = this.state;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (grid[i][j] === "") return false;
      }
    }
    return true;
  };

  handleRestart = () => {
    console.log("here");
    const grid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    this.setState({ grid, player: 0, winner: null });
  };

  getWinner = () => {
    const { grid } = this.state;
    if (
      grid[0][0] !== "" &&
      grid[0][0] === grid[0][1] &&
      grid[0][2] === grid[0][1]
    )
      return grid[0][0] === "X" ? 1 : 2;

    if (
      grid[0][0] !== "" &&
      grid[0][0] === grid[1][0] &&
      grid[2][0] === grid[1][0]
    )
      return grid[0][0] === "X" ? 1 : 2;

    if (
      grid[2][0] !== "" &&
      grid[2][0] === grid[2][1] &&
      grid[2][2] === grid[2][1]
    )
      return grid[0][0] === "X" ? 1 : 2;

    if (
      grid[0][2] !== "" &&
      grid[0][2] === grid[1][2] &&
      grid[2][2] === grid[1][2]
    )
      return grid[0][0] === "X" ? 1 : 2;

    if (
      grid[0][0] !== "" &&
      grid[0][0] === grid[1][1] &&
      grid[2][2] === grid[1][1]
    )
      return grid[0][0] === "X" ? 1 : 2;

    if (
      grid[0][2] !== "" &&
      grid[0][2] === grid[1][1] &&
      grid[2][0] === grid[1][1]
    )
      return grid[0][0] === "X" ? 1 : 2;
    return null;
  };

  render() {
    if (this.state.winner !== null) {
      return (
        <div>
          <Winner onRestart={this.handleRestart} winner={this.state.winner} />
        </div>
      );
    }
    return (
      <div className="main">
        <Grid
          className="grid"
          grid={this.state.grid}
          onPlay={this.handlePlay}
        />
        <Prompt player={this.state.player} />
      </div>
    );
  }
}

export default Game;
