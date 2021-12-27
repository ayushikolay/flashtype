import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
}) => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a Speed Test now!
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        words={words}
        characters={characters}
        wpm={wpm}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
      />
    </div>
  );
};

export default ChallengeSection;
