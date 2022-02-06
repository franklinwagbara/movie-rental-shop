import React, { Component } from "react";
import "./css/theme.css";
import "./css/banner.css";

class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="banner back-color">
        <div>
          <span className="hi">Hi, my name is</span>
        </div>
        <div>
          <span className="name">Franklin, Wagbara</span>
        </div>
        <div>
          <span className="title">I am a Full-Stack Software Engineer</span>
        </div>

        <button>Contact Me</button>
      </div>
    );
  }
}

export default Banner;
