import { checkInput } from "../page"

export function BigKey(props: any) {
    const { inner, keyCode, stateGrid, gridData } = props

    return (
        <div className="cursor-pointer bg-gray-300 border-0 rounded-md w-16 h-14 flex flex-col justify-center items-center" onClick={() => { checkInput(keyCode, stateGrid, gridData) }}>
            {inner}
        </div>
    )
}