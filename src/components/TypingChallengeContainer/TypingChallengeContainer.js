import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* Details Section  */}
      <div className="details-container">
        {/* Words Typed  */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />

        {/* Characters Typed  */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

        {/* Speed */}
        <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>
      <div className="typewriter-container">
        <TypingChallenge
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          timerStarted={timerStarted}
        />
      </div>
      {/* The REAL challenge */}
    </div>
  );
};
export default TypingChallengeContainer;
