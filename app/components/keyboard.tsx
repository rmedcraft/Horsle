import { LetterKey } from "./letterKey";

export function Keyboard() {
    const keyboardLetters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]

    return (
        <div className="mx-auto mt-4">
            <LetterKey letter="R" />
        </div>
    )
}