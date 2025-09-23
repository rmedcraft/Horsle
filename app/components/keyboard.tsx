import { BigKey } from "./bigKey";
import { LetterKey } from "./letterKey";
import { BsBackspace } from "react-icons/bs";

export function Keyboard(props: any) {
    const { stateGrid, gridData } = props

    const keyboardLetters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]

    return (
        <div className="mx-auto mt-6 flex flex-col gap-2">
            {keyboardLetters.map((row, index) =>
                <div className="flex flex-row mx-auto gap-1.5" key={index}>
                    {index === 2 && <BigKey inner={<p className="text-xs font-bold">ENTER</p>} keyCode="Enter" stateGrid={stateGrid} gridData={gridData} />}

                    {[...row].map((letter, rowIndex) =>
                        <LetterKey key={letter} letter={letter} stateGrid={stateGrid} gridData={gridData} />
                    )}

                    {index === 2 && <BigKey inner={<BsBackspace className="text-lg" fontWeight='bold' />} keyCode="Backspace" stateGrid={stateGrid} gridData={gridData} />}
                </div>
            )}
        </div>
    )
}