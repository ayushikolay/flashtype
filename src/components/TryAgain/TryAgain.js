import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
  const url = "https://github.com/ayushikolay/flashtype";
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>

      <div className="result-container">
        <p>
          <b>Characters:&nbsp;</b>
          {characters}
        </p>
        <p>
          <b>Words:&nbsp;</b>
          {words}
        </p>
        <p>
          <b>Speed:&nbsp;</b>
          {wpm} &nbsp;wpm(Words/minute)
        </p>
      </div>

      <div>
        <button
          onClick={() => startAgain()}
          className="end-btns start-again-btn"
        >
          Re-try
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=" + url,
              "facebook-share-dialog",
              "width=800,height=600"
            )
          }
          className="end-btns share-btn"
        >
          Share
        </button>

        <button
          onClick={() =>
            window.open(
              "https://twitter.com/intent/tweet?text=Check%20this%20out%20" +
                url,
              "Twitter",
              "width=800,height=600"
            )
          }
          className="end-btns tweet-btn"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
