import { Todos } from './components/Todos'
import { useState } from 'react'
import { type TodoTitle, type FilterValue, type ITodo, type TodoId, type ListOfTodos } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockkTodos: ListOfTodos = [
  {
    id: '2e552cec-e196-4e3c-916a-9e2a6a4a2056',
    title: 'Learn React',
    completed: true
  }
  // {
  //   id: '2e552cec-e196-4e3c-916a-9e2a6a4a2056',
  //   title: 'Learn TypeScript',
  //   completed: false
  // },
  // {
  //   id: '3e552cec-e196-4e3c-916a-9e2a6a4a2056',
  //   title: 'Learn IA',
  //   completed: false
  // }
]

export default function App (): JSX.Element {
  const [todos, setTodos] = useState(mockkTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleteTodo = ({ id, completed }: Pick<ITodo, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterSelected = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleClearCompletedTodos = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const filterTodos: ListOfTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleNewTodo = ({ title }: TodoTitle): void => {
    const newTodo: ITodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const activeTodos = todos.filter(todo => !todo.completed).length
  const completeTodos = todos.length - activeTodos

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleNewTodo} />
      <Todos
        todos={filterTodos}
        onToggleCompleteTodo={handleCompleteTodo}
        onRemoveTodo={handleRemoveTodo}
      />
      <Footer
        activeTodos={activeTodos}
        completeTodos={completeTodos}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterSelected}
        onClearCompletedTodos={handleClearCompletedTodos}
      />
    </div>
  )
}
