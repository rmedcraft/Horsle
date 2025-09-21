export function LetterBox(props: any) {
    const { letter } = props

    return (
        <div className="w-16 h-16 border-2 border-gray-300 flex justify-center items-center">
            <p className="text-5xl">{letter}</p>
        </div>
    )
}