import { Provider, useDispatch, useSelector } from "react-redux"
import { configureStore, Dispatch } from "@reduxjs/toolkit"
import TodoItem from "../components/TodoItem"
import { TodoActionI, todoReducer } from '../stores/redux/reducer'
import { TodoState } from "../types"
import TodoInput from "../components/TodoInput"
import { TodoAction } from "../stores/redux/actions"

const store = configureStore({
    reducer: todoReducer,
})

function ReduxPage() {
    return <Provider store={store}>
        <InputBar />
        <TodoList />
    </Provider>
}

function InputBar() {
    const dispatch = useDispatch<Dispatch<TodoActionI>>()
    return <TodoInput onAdd={value => dispatch({ type: TodoAction.ADD, payload: { done: false, content: value } })}></TodoInput>
}

function TodoList() {
    const todos = useSelector<TodoState, TodoState>(state => state)
    const dispatch = useDispatch<Dispatch<TodoActionI>>()
    if (!todos.length) {
        return <p>please add something to do</p>
    }
    return <ul>
        {
            todos.map(todo => <TodoItem 
                    key={todo.content} 
                    onToggle={item => { 
                        dispatch({type: TodoAction.TOGGLE, payload: item})
                    }} 
                    onDelete={item => { 
                        dispatch({type: TodoAction.REMOVE, payload: item})
                    }} 
                    {...todo} />)
        }
    </ul>
}

export default ReduxPage
