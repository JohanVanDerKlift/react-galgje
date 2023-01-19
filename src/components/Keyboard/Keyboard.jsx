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

function Keyboard(props) {
    return (
        <div className="keyboard-grid">
          {KEYS.map((key) => {
            return <button key={key} className="keyboard-button">{key}</button>
          })}
        </div>
    );
}

export default Keyboard;