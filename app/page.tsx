"use client"
import { Navbar } from "./components/navbar";
import { LetterGrid } from "./components/letterGrid";
import { Keyboard } from "./components/keyboard";
import { useState } from "react";
import { addCleanupEventListener } from "./utils/eventListener";

export default function Home() {
  const answer = "ROWAN"

  let row = 0
  let col = 0

  const [letter, setLetter] = useState('')

  const stateGrid = Array.from({ length: 6 }).map(() => Array.from({ length: 5 }).map(() => useState("")))

  addCleanupEventListener(window, "keydown", (e: KeyboardEvent) => {
    console.log(row, col)
    if (/^[A-Za-z]+$/.test(e.key) && e.key.length === 1 && col < 5 && row < 6) {
      stateGrid[row][col][1](e.key.toUpperCase())
      col++
    }
    console.log(e.key)
    if (e.key === "Backspace" && col > 0) {
      col--
      stateGrid[row][col][1]("")
    }
  })


  return (
    <div className="flex flex-col absolute top-0 w-screen h-screen">
      <Navbar />
      <LetterGrid letter={letter} row={row} col={col} stateGrid={stateGrid} />
      <Keyboard setLetter={setLetter} />
    </div>
  );
}
