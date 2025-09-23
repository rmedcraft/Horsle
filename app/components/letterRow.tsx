import { LetterBox } from "./letterBox";

export function LetterRow(props: any) {
    const stateRow: any[] = props.stateRow

    return (
        <div className="mx-auto flex flex-row gap-1.5">
            {stateRow.map((state, index) =>
                <LetterBox key={index} letter={state[0]} />
            )}
        </div>
    )
}