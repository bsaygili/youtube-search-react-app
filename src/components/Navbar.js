import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="ui three item menu">
        <a href="/" className="item active">
          Buildings Videos
        </a>
        <a href="/" className="item">
          Buildings Reviews
        </a>
        <a href="/" className="item ">
          New Mega Buildings Projects
        </a>
      </div>
    );
  }
}

export default Navbar;
