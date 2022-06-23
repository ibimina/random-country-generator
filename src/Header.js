import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </header>
    );
  }
}

export default Header;
