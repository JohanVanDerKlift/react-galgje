import React from 'react';
import './HangmanWord.css';

const word = "test";
const guessedLetters = "te";

function HangmanWord({guessedLetters, wordToGuess}) {
  return (
    <div className="word">
      {wordToGuess.split("").map((letter, index) => (
        <span className="letters" key={index}>
          <span className="letter" style={{
            visibility: guessedLetters.includes(letter)
              ? "visible"
              : "hidden"
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;