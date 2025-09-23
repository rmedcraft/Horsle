import { LetterRow } from "./letterRow";

export function LetterGrid(props: any) {
    const { letter, stateGrid, gridData } = props

    console.log(stateGrid)

    return (
        <div className="mt-6 mx-auto flex flex-col gap-1.5 my-0">
            {stateGrid.map((stateRow: any[], index: number) =>
                <LetterRow key={index} letter={letter} stateRow={stateRow} />
            )}
        </div>
    )
}