import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = ({
  timeRemaining,
  selectedParagraph,
  timerStarted,
}) => {
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">
          {/* {`00:${timeRemaining}`} */}
          {/* we can write using backticks as well */}
          00:
          {timeRemaining > 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="timer-info">
          {!timerStarted && "start typing to start the test"}
        </p>
      </div>
      <div className="textarea-container">
        <div className="textarea-left">
          <div className="textarea test-paragraph">{selectedParagraph}</div>
        </div>
        <div className="textarea-right">
          <textarea
            className="textarea"
            placeholder="Start typing here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
