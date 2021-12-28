import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";

const TestContainer = ({
  selectedParagraph,
  testInfo,
  onInputChange,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  startAgain,
}) => {
  return (
    <div className="test-container">
      {/* Show the try again or start screen */}
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <TypingChallengeContainer
            selectedParagraph={selectedParagraph}
            testInfo={testInfo}
            onInputChange={onInputChange}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            words={words}
            characters={characters}
            wpm={wpm}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain
            startAgain={startAgain}
            words={words}
            characters={characters}
            wpm={wpm}
          />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
