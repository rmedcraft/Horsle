export function LetterKey(props: any) {
    const { letter, setLetter } = props

    return (
        <div className="cursor-pointer bg-gray-300 border-0 rounded-md w-11 h-14 flex flex-col justify-center items-center" onClick={() => setLetter(letter)}>
            <p className="font-bold text-xl select-none">{letter}</p>
        </div>
    )
}