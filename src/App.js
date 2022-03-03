import React, { Component } from "react";
import NavBar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
