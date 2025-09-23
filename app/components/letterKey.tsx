import { checkInput } from "../page"

export function LetterKey(props: any) {
    const { letter, stateGrid, gridData } = props

    return (
        <div className="cursor-pointer bg-gray-300 border-0 rounded-md w-11 h-14 flex flex-col justify-center items-center" onClick={() => checkInput(letter, stateGrid, gridData)}>
            <p className="font-bold text-xl select-none">{letter}</p>
        </div>
    )
}