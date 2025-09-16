import { LetterKey } from "./letterKey";

export function Keyboard() {
    const keyboardLetters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]
    let keyIndex = -1

    return (
        <div className="mx-auto mt-6 flex flex-col gap-2">
            {keyboardLetters.map((row, index) =>
                <div className="flex flex-row mx-auto gap-1.5" key={index}>
                    {[...row].map((letter, rowIndex) => {
                        keyIndex++
                        return <LetterKey key={keyIndex} letter={letter} />
                    })}
                </div>
            )}
        </div>
    )
}