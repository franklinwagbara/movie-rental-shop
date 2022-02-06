import React, { Component } from "react";
import NavBar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
