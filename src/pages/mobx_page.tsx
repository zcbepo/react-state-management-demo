import TodoInput from "../components/TodoInput"
import Todo from "../components/TodoItem"
import { useTodoStore } from "../stores/mobx"
import { observer, Observer } from "mobx-react"

function MobxPage() {
    return <>
        <InputBar></InputBar>
        <TodoList></TodoList>
    </>
}

const InputBar = observer(() => {
    const store = useTodoStore()
    return <TodoInput onAdd={value => { store.addTodo({ done: false, content: value }) }}></TodoInput>
})

const TodoList = observer(() => {
    const store = useTodoStore()
    if (!store.todos.length) {
        return <p>please add something to do</p>
    }
    return <ul>
        {
            store.todos.map(todo => <Todo
                key={todo.content}
                onToggle={v => {
                    store.toggleTodo(v)
                }}
                onDelete={v => {
                    store.deleteTodo(v)
                }}
                {...todo} />)
        }
    </ul>
})

export default MobxPage