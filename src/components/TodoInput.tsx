import { useState } from "react"

type OnAddFunction = (value: string) => void

export default function TodoInput({ onAdd }: { onAdd: OnAddFunction }) {
    const [value, setValue] = useState("")
    return <div>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={() => {
            onAdd(value)
            setValue('')
        }}>add</button>
    </div>
}