import { LetterKey } from "./letterKey";

export function Keyboard() {
    const keyboardLetters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]

    return (
        <div className="mx-auto mt-6 flex flex-col gap-2">
            {keyboardLetters.map((row, index) =>
                <div className="flex flex-row mx-auto gap-1.5">
                    {[...row].map((letter, index) =>
                        <LetterKey key={index} letter={letter} />
                    )}
                </div>
            )}
        </div>
    )
}