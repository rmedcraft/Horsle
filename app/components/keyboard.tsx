import { LetterKey } from "./letterKey";

export function Keyboard() {
    const keyboardLetters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]

    return (
        <div className="mx-auto mt-6 flex flex-col gap-2">
            {keyboardLetters.map((row, index) =>
                <div className="flex flex-row mx-auto gap-1.5" key={index}>
                    {[...row].map((letter, rowIndex) =>
                        <LetterKey key={letter} letter={letter} />
                    )}
                </div>
            )}
        </div>
    )
}