import { LetterRow } from "./letterRow";

export function LetterGrid(props: any) {
    const { letter, row, col } = props

    const { stateGrid }: { stateGrid: any[] } = props
    console.log(stateGrid)

    return (
        <div className="mt-6 mx-auto flex flex-col gap-1.5 my-0">
            {stateGrid.map((stateRow, index) =>
                <LetterRow key={index} letter={letter} stateRow={stateRow} />
            )}
        </div>
    )
}