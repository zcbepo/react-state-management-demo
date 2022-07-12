import { Action, Reducer } from "redux";
import { TodoItem, TodoState } from "../../types";
import { TodoAction } from "./actions";

export interface TodoActionI extends Action {
    type: TodoAction,
    payload: TodoItem
}

const actionsStrategy: Record<TodoAction, (state: TodoState, payload: TodoItem) => TodoState> = {
    [TodoAction.ADD]: (state, payload) => ([...state, payload]),
    [TodoAction.REMOVE]: (state, payload) => state.filter(td => td.content !== payload.content),
    [TodoAction.TOGGLE]: (state, payload) => {
        return state.map(s => {
            if (s.content === payload.content) {
                return {...s, done: !s.done}
            }
            return {...s}
        })

    }
}

export const todoReducer: Reducer<TodoState, TodoActionI> = (state = [], action) => {
    const fn = actionsStrategy[action.type]
    if (fn) {
        return fn(state, action.payload)
    }
    return state
}