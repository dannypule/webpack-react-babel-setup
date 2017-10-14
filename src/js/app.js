import React, { Component } from "react";
import { render } from "react-dom";
import five from "./five";
import "../css/style.css";
import keenImage from "../assets/keen.png";

export default class Hello extends Component {
  render() {
    return (
      <div>
        {five}
        <img src={keenImage} alt="Commander Keen" />
      </div>
    );
  }
}

render(<Hello />, document.getElementById("app"));
