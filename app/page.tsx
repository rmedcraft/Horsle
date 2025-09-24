"use client"
import { Navbar } from "./components/navbar";
import { LetterGrid } from "./components/letterGrid";
import { Keyboard } from "./components/keyboard";
import { useRef, useState } from "react";
import { addCleanupEventListener } from "./utils/eventListener";

export function checkInput(input: string, stateGrid: any[], gridData: { row: number, col: number }) {
    if (/^[A-Za-z]+$/.test(input) && input.length === 1 && gridData.col < 5 && gridData.row < 6) {
        stateGrid[gridData.row][gridData.col][1](input.toUpperCase())
        gridData.col++
    }
    if (input === "Backspace" && gridData.col > 0) {
        gridData.col--
        stateGrid[gridData.row][gridData.col][1]("")
    }
    if (input === "Enter" && gridData.col === 5) {
        console.log("Enter clicked")
    }
}

export default function Home() {
    const answer = "ROWAN"

    const stateGrid = Array.from({ length: 6 }).map(() => Array.from({ length: 5 }).map(() => useState("")))

    const gridData = useRef({ row: 0, col: 0 }).current

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
