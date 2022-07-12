import React, { useMemo } from 'react';
import { TodoItem } from '../types'

interface TodoItemProps extends TodoItem {
    onDelete: (item: TodoItem) => void
    onToggle: (item: TodoItem) => void
}

function className(obj: Record<string, boolean>) {
    const classNameList = Object.keys(obj).filter(k => obj[k])
    return classNameList.length ? classNameList.join(' ') : ''
}

export default function Todo(props: TodoItemProps) {
    const { done, content, onToggle, onDelete } = props
    const checkboxClassName = useMemo(() => className({ "todo-check": true, "todo-done": done }), [done])
    const contentClassName = useMemo(() => className({ "todo-content": true, "todo-done": done }), [done])
    return <li className='todo-item'>
        <div onClick={() => onToggle({ done, content })} className={checkboxClassName}></div>
        <div className={contentClassName}>{content}</div>
        <button className='todo-button' onClick={() => onDelete({ done, content })}>delete</button>
    </li>
}