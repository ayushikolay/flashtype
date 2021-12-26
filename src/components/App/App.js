import React from "react";
import "./App.css";
import Navbar from "./../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";

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
        <Footer />
      </div>
    );
  }
}

export default App;
