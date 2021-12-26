import React, { Component } from "react";
import logo from "././../../assets/logo.png";
import Octocat from "././../../assets/Octocat.png";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="nav-left">
            <img className="flash-logo" src={logo} alt="logo" />
            <p className="flash-logo-text">flashType</p>
          </div>
          <div className="nav-right">
            <a
              target="_blank"
              className="nav-aam-link"
              href="https://github.com/ayushikolay/flashtype"
              rel="noreferrer"
            >
              <img className="Octocat-image" src={Octocat} alt="Source Code" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
