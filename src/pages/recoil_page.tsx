import { RecoilRoot } from "recoil"
import TodoInput from "../components/TodoInput"
import TodoItem from "../components/TodoItem"
import { useTodoState } from "../stores/recoil"

function RecoilPage() {
    return <RecoilRoot>
        <InputBar />
        <TodoList />
    </RecoilRoot>
}

function InputBar() {
    const { addTodo } = useTodoState()
    return <TodoInput onAdd={value => addTodo({ done: false, content: value })}></TodoInput>
}

function TodoList() {
    const { todos, deleteTodo, toggleTodo } = useTodoState()
    if (!todos.length) {
        return <p>please add something to do</p>
    }
    return <ul>
        {
            todos.map(todo => <TodoItem
                key={todo.content}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                {...todo} />)
        }
    </ul>
}

export default RecoilPage