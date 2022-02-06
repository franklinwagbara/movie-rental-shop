import React, { Component } from "react";
import NavBar from "./components/navbar";
import Main from "./components/content";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
