import React, { useState } from "react";

function GuessForm({ handleGuess, gameOver }) {
  const [guess, setGuess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) {
      return;
    }
    handleGuess(guess);
    console.log(guess);
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        style={{ textTransform: "uppercase" }}
        disabled={gameOver}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
