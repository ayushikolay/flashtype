import React from "react";
import "./App.css";
import Navbar from "./../Navbar/Navbar";
import Landing from "../Landing/Landing";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/*** Nav Section*/}
        <Navbar />

        {/* Landing Page  */}
        <Landing />

        {/* Challenge section  */}

        {/* Footer  */}
      </div>
    );
  }
}

export default App;
