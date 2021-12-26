import React from "react";
import "./App.css";
import Navbar from "./../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/*** Nav Section*/}
        <Navbar />

        {/* Landing Page  */}
        <Landing />

        {/* Challenge section  */}
        <ChallengeSection />

        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default App;
