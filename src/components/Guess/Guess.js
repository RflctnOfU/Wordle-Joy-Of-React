import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${
            guess ? checkGuess(guess, answer)[num].status : undefined
          }`}
        >
          {guess ? checkGuess(guess, answer)[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
