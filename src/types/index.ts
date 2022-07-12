export interface TodoItem {
    done: boolean,
    content: string
}

export type TodoState = TodoItem[]