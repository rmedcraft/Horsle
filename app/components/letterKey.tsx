export function LetterKey(props: any) {
    const { letter } = props

    return (
        <div className="cursor-pointer bg-gray-300 border-0 rounded-md w-10 h-14 flex flex-col justify-center items-center">
            <p className="font-bold text-xl">{letter}</p>
        </div>
    )
}