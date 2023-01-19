import React from 'react';
import './HangmanDrawing.css';

const HEAD = (
  <div className="head"/>
)
const BODY = (
  <div className="body"/>
)
const LEFT_ARM = (
  <div className="left-arm"/>
)
const RIGHT_ARM = (
  <div className="right-arm"/>
)
const LEFT_LEG = (
  <div className="left-leg"/>
)
const RIGHT_LEG = (
  <div className="right-leg"/>
)

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

function HangmanDrawing({numberOfGuesses}) {
  return (
    <div className="hangman-container">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="rope"/>
      <div className="top-bar"/>
      <div className="stand"/>
      <div className="bottom-bar"/>
      <div/>
      <div/>
    </div>
  );
}

export default HangmanDrawing;