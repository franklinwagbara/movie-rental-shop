import React, { Component } from "react";
import Square from "./square";
import "./css/grid.css";

class Grid extends Component {
  state = {};

  showGrid = () => {
    const { grid } = this.props;
    let result = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        result.push(
          <Square
            key={`${i}${j}`}
            x={j}
            y={i}
            value={grid[i][j]}
            onPlay={this.props.onPlay}
          />
        );
      }
    }
    return result;
  };

  render() {
    return <div className="grid">{this.props.grid && this.showGrid()}</div>;
  }
}

export default Grid;
