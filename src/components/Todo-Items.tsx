import * as React from 'react'
import { TodoItemInterface } from './../interface'
const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className='todo-item'>
      

      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.text}
          onBlur={props.handleTodoBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
        />
      </div>

      <button className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem