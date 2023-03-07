import * as React from 'react'
import TodoItem from './Todo-Items'
import { TodoListInterface } from './../interface'
const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
              handleTodoBlur={props.handleTodoBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList