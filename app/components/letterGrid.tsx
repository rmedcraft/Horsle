import { useState } from "react";
import { LetterRow } from "./letterRow";
import { addCleanupEventListener } from "../utils/eventListener";

export function LetterGrid(props: any) {
    const { letter } = props

    return (
        <div className="mt-6 mx-auto flex flex-col gap-1.5 my-0">
            {Array.from({ length: 6 }).map((_, index) =>
                <LetterRow key={index} letter={letter} />
            )}
        </div>
    )
}