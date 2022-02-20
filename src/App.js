import React, { Component } from "react";
import "./App.css";
import Game from "./components/game";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
