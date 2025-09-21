import { LetterBox } from "./letterBox";

export function LetterRow(props: any) {
    return (
        <div className="mx-auto flex flex-row gap-1.5">
            {Array.from({ length: 5 }).map((_, index) =>
                <LetterBox key={index} letter={props.letter} />
            )}
        </div>
    )
}