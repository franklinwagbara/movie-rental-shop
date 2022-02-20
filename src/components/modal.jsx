import { nodeName } from "jquery";
import React, { Component } from "react";
import "./css/modal.css";

class Modal extends Component {
  state = { display: 0 };
  style = {
    display: "none",
  };
  handleClick = () => {
    this.setState({ display: this.state.display ^ 1 });
  };

  render() {
    return (
      <div onClick={this.handleClick} className="container">
        <button onClick={this.handleClick} className="btn btn-primary">
          Toggle Modal
        </button>
        <div
          style={{ display: this.state.display === 1 ? "flex" : "none" }}
          className="modal"
        >
          <div className="content">
            <div className="modal-head">
              <span onClick={this.handleClick}>&times;</span>
            </div>
            <div className="modal-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                error, eligendi obcaecati, praesentium velit ipsa non ducimus
                sed explicabo laudantium, nihil iure veniam inventore
                voluptatem? Sequi vitae inventore temporibus beatae.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
