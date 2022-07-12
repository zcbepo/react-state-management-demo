import { atom, useRecoilState } from "recoil";
import { TodoItem, TodoState } from "../../types";

const todos = atom<TodoState>({
    key: 'todos',
    default: []
})

export function useTodoState() {
    const [todoState, setTodoState] = useRecoilState(todos)
    const addTodo = (item: TodoItem) => {
        setTodoState([...todoState, item])
    }
    const deleteTodo = (item: TodoItem) => {
        setTodoState(todoState.filter(t => t.content !== item.content))
    }
    const toggleTodo = (item: TodoItem) => {
        setTodoState(todoState.map(t => {
            if (t.content === item.content) {
                return {...t, done: !t.done}
            } else {
                return {...t}
            }
        }))
    }
    return {todos: todoState, addTodo, deleteTodo, toggleTodo}
}