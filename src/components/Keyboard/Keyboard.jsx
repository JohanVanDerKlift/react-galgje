import React from 'react';
import './Keyboard.css';

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]

function Keyboard({activeLetters, inactiveLetters, addGuessedLetter, disabled}) {
    return (
        <div className="keyboard-grid">
          {KEYS.map((key) => {
            const isActive = activeLetters.includes(key);
            const isInActive = inactiveLetters.includes(key);
            return <button
              onClick={() => addGuessedLetter(key)}
              key={key}
              className={`keyboard-button ${isActive ? "keyboard-button-active" : ""} ${isInActive ? "keyboard-button-inactive" : ""}`}
              disabled={isInActive || isActive || disabled}
            >{key}</button>
          })}
        </div>
    );
}

export default Keyboard;