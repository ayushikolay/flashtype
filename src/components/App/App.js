import React from "react";
import "./App.css";
import Navbar from "./../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import { SAMPLE_PARAGRAPHS } from "./../../data/sampleParagraphs.js";

const totalTime = 60;
class App extends React.Component {
  state = {
    selectedParagraph: SAMPLE_PARAGRAPHS,
    timerStarted: false,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
  };

  render() {
    return (
      <div className="app">
        {/*** Nav Section*/}
        <Navbar />

        {/* Landing Page  */}
        <Landing />

        {/* Challenge section  */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
        />

        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default App;
