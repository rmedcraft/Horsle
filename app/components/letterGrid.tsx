import { LetterBox } from "./letterBox";

export function LetterGrid(props: any) {
    return (
        <div className="mt-6 mx-auto grid grid-cols-5 gap-1.5">
            {Array.from({ length: 30 }).map((_, index) =>
                <LetterBox key={index} />
            )}
        </div>
    )
}