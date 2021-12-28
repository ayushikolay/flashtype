import React from "react";
import { SAMPLE_PARAGRAPHS } from "./../../data/sampleParagraphs.js";
import Navbar from "./../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import "./App.css";

/**
 * Schema of Test Info:
 * [
 *    {
 *      testLetter: 'H',
 *      status: correct/incorrect/notAttempted
 *    }, {
 *      testLetter: 'e',
 *      status: correct/incorrect/notAttempted
 *    }
 * ]
 */

const totalTime = 60;
const DefaultState = {
  selectedParagraph: "Hello World!",
  testInfo: [],
  timerStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
};
//we will use this api as we donot want to handle the counts of words by our own
//we make api call and they will handle this for us
// const serviceUrl = "http://metaphorpsum.com/paragraphs/2/4";
class App extends React.Component {
  // state = {
  //   selectedParagraph: SAMPLE_PARAGRAPHS,
  //   timerStarted: false,
  //   timeRemaining: totalTime,
  //   words: 0,
  //   characters: 0,
  //   wpm: 0,
  // };
  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    // Update the testInfo in state
    this.setState({
      ...DefaultState,
      selectedParagraph: data,
      testInfo,
    });
  };

  fetchNewParagraph = () => {
    fetch("http://metaphorpsum.com/paragraphs/1/9")
      .then((response) => response.text())
      .then((data) => {
        // Once the api results are here, break the selectedParagraph into test info
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });

        // Update the testInfo in state
        this.setState({
          ...DefaultState,
          selectedParagraph: data,
          testInfo,
        });
      });
  };

  componentDidMount() {
    // As soon as the component mounts, load the selected paragraph from the API
    this.fetchNewParagraphFallback();
  }

  startAgain = () => this.fetchNewParagraphFallback();

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // Change the WPM and Time Remaining
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) this.startTimer();

    /**
     * 1. Handle the underflow case - all characters should be shown as not-attempted
     * 2. Handle the overflow case - early exit
     * 3. Handle the backspace case
     *      - Mark the [index+1] element as notAttempted
     *        (irrespective of whether the index is less than zero)
     *      - But, don't forget to check for the overflow here
     *        (index + 1 -> out of bound, when index === length-1)
     * 4. Update the status in test info
     *      1. Find out the last character in the inputValue and it's index
     *      2. Check if the character at same index in testInfo (state) matches
     *      3. Yes -> Correct
     *         No  -> Incorrect (Mistake++)
     * 5. Irrespective of the case, characters, words and wpm can be updated
     */

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });

      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        words,
      });
      return;
    }

    // Make a copy
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";

    // Check for mistake
    const isMistake = inputValue[index] === testInfo[index].testLetter;

    // Update the testInfo
    testInfo[index].status = isMistake ? "correct" : "incorrect";

    // Update the state
    this.setState({
      testInfo,
      words,
      characters,
    });
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
          testInfo={this.state.testInfo}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default App;
