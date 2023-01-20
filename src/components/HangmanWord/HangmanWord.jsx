import React from 'react';
import './HangmanWord.css';

function HangmanWord({guessedLetters, wordToGuess, reveal}) {
  return (
    <div className="word">
      {wordToGuess.split("").map((letter, index) => (
        <span className="letters" key={index}>
          <span className={`${!guessedLetters.includes(letter) && reveal ? "letter-lose" : "letter"}`} style={{
            visibility: guessedLetters.includes(letter) || reveal
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