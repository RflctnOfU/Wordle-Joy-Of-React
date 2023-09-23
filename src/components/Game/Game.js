import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
// import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessForm from "../GuessForm/GuessForm";
import GuessDiv from "../GuessDiv/GuessDiv";
import GameOver from "../GameOver/GameOver";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  // const [letterStatus, setLetterStatus] = React.useState([]);
  const [winLose, setWinLose] = React.useState("");
  const [gameOver, setGameOver] = React.useState(false);
  const [numOfTurnsLeft, setNumOfTurnsLeft] = React.useState(
    NUM_OF_GUESSES_ALLOWED
  );

  const handleGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    // const status = checkGuess(guess, answer);
    // setLetterStatus(status);
    setNumOfTurnsLeft((prev) => prev - 1);
    if (guess === answer || numOfTurnsLeft === 1) {
      guess === answer ? setWinLose("win") : setWinLose("lose");
      setGameOver((prev) => !prev);
    }
  };
  return (
    <>
      <GuessDiv guesses={guesses} answer={answer} />
      {gameOver && (
        <GameOver
          answer={answer}
          winLose={winLose}
          numOfTurnsLeft={numOfTurnsLeft}
        />
      )}
      <GuessForm handleGuess={handleGuess} gameOver={gameOver} />
      <Keyboard />
    </>
  );
}

export default Game;
