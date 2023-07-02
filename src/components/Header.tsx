import { CreateTodo } from './CreateTodo'
import { type TodoTitle } from '../types'

interface Props {
  onAddTodo: (title: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>TodoApp MVC</h1>

      <CreateTodo
        onSaveTodo={onAddTodo}
      />
    </header>
  )
}
