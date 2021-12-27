import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import "./TestContainer.css";

const TestContainer = ({ words, characters, wpm }) => {
  return (
    <div className="test-container">
      <div data-aos="fade-up" className="typing-challenge-container"></div>
      <div className="try-again-container">
        <TryAgain words={words} characters={characters} wpm={wpm} />
      </div>
    </div>
  );
};

export default TestContainer;
