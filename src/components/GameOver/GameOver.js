import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GameOver({ winLose, answer, numOfTurnsLeft }) {
  return (
    <>
      {winLose === "win" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{NUM_OF_GUESSES_ALLOWED - numOfTurnsLeft} guesses</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GameOver;
