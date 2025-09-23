"use client"
import { Navbar } from "./components/navbar";
import { LetterGrid } from "./components/letterGrid";
import { Keyboard } from "./components/keyboard";
import { useRef, useState } from "react";
import { addCleanupEventListener } from "./utils/eventListener";

export function checkInput(input: string, stateGrid: any[], gridData: { row: number, col: number }) {
  console.log(gridData.col)
  if (/^[A-Za-z]+$/.test(input) && input.length === 1 && gridData.col < 5 && gridData.row < 6) {
    stateGrid[gridData.row][gridData.col][1](input.toUpperCase())
    gridData.col++
  }
  if (input === "Backspace" && gridData.col > 0) {
    gridData.col--
    stateGrid[gridData.row][gridData.col][1]("")
  }
}

export default function Home() {
  const answer = "ROWAN"

  let row = 0
  let col = 0

  const stateGrid = Array.from({ length: 6 }).map(() => Array.from({ length: 5 }).map(() => useState("")))

  const gridData = useRef({ row, col }).current

  addCleanupEventListener(window, "keydown", (e: KeyboardEvent) => {
    checkInput(e.key, stateGrid, gridData)
  })


  return (
    <div className="flex flex-col absolute top-0 w-screen h-screen">
      <Navbar />
      <LetterGrid stateGrid={stateGrid} gridData={gridData} />
      <Keyboard stateGrid={stateGrid} gridData={gridData} />
    </div>
  );
}
