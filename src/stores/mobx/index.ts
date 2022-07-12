import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { TodoItem, TodoState } from "../../types";

type TodoFunction = (item: TodoItem) => void

interface TodoMobxStore {
    todos: TodoState
    addTodo: TodoFunction
    deleteTodo: TodoFunction
    toggleTodo: TodoFunction
}

const store = makeAutoObservable<TodoMobxStore>({
    todos: [],
    addTodo(item) {
        store.todos.push(item)
    },
    deleteTodo(item) {
        const index = store.todos.findIndex(t => t.content === item.content)
        store.todos.splice(index, 1)
    },
    toggleTodo(item) {
        const todo = store.todos.find(t => t.content === item.content)!
        todo.done = !todo.done
    }
})

const todoContext = createContext(store)

export const useTodoStore = () => useContext(todoContext)