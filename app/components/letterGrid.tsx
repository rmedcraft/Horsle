import { LetterBox } from "./letterBox";

export function LetterGrid() {
    return (
        <div className="mt-3 mx-auto grid grid-cols-5 gap-1">
            {Array.from({ length: 30 }).map((_, index) =>
                <LetterBox key={index} />
            )}
        </div>
    )
}