"use client"
import { Navbar } from "./components/navbar";
import { LetterGrid } from "./components/letterGrid";
import { Keyboard } from "./components/keyboard";
import { useState } from "react";

export default function Home() {
  const answer = "HORSE"

  const [guessArr, setGuessArr]: any[] = useState([[], [], [], [], [], []])

  // indicates which guess you're on. i.e if you guessed 2 words you'll be on guess 2
  const [currentGuess, setCurrentGuess] = useState(0)

  // indicates the current character you're on. i.e if you typed "ho" you're on letter 2
  const [currentLetter, setCurrentLetter] = useState(0)


  return (
    <div className="flex flex-col absolute top-0 w-screen h-screen">
      <Navbar />
      <LetterGrid guessArr={guessArr} currentGuess={currentGuess} currentLetter={currentLetter} />
      <Keyboard guessArr={guessArr} setCurrentGuess={setCurrentGuess} setCurrentLetter={setCurrentLetter} />
    </div>
  );
}
