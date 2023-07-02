import { Todo } from './Todo'
import { type TodoId, type ListOfTodos, type ITodo } from '../types'

interface TodosProps {
  todos: ListOfTodos
  onToggleCompleteTodo: ({ id, completed }: Pick<ITodo, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<TodosProps> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <li
            key={todo.id}
            className={`${todo.completed ? 'completed' : ''}`}
          >
            <Todo
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggleCompleteTodo={onToggleCompleteTodo}
              onRemoveTodo={onRemoveTodo}
            />
          </li>
        ))
      }
    </ul>
  )
}
