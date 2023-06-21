import { Todos } from './components/Todos'
import { useState } from 'react'

const mockkTodos = [
  {
    id: 1,
    title: 'Learn React',
    completed: true
  },
  {
    id: 2,
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: 3,
    title: 'Learn IA',
    completed: false
  }
]

export default function App (): JSX.Element {
  const [todos, setTodos] = useState(mockkTodos)

  const handleRemoveTodo = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <h1>TodoApp MVC</h1>
      <Todos
        todos={todos}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  )
}
