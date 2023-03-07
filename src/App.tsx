import * as React from 'react'
import { render } from 'react-dom'
import TodoForm from './components/AddTodo'
import TodoList from './components/TodoList'
import { TodoInterface } from './interface'
import './App.css'


const App = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
  }
  
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value
    setTodos(newTodosState)
  }
  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
    setTodos(newTodosState)
  }
  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    setTodos(newTodosState)
  }
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    } else {
      event.target.classList.remove('todo-input-error')
    }
  }

  return (
    <div className="todo-list-app">
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />

      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
      />
    </div>
  )
}

export default App;