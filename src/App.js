import './App.css';
import {useState} from "react";
import words from './wordlist.json';
import HangmanDrawing from "./components/hangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord/HangmanWord";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  console.log(wordToGuess);

  return (
    <div className="container">
      <div className="top-text">
        Lose Win
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div className="keyboard-container">
        <Keyboard/>
      </div>
    </div>
  );
}

export default App;
