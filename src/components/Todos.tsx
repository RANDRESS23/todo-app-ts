import { Todo } from './Todo'
import { type TodoId, type ListOfTodos, type ITodo } from '../types'
import { Toggle } from './Toggle'

interface TodosProps {
  todos: ListOfTodos
  activeTodos: number
  completeTodos: number
  onToggleCompleteTodo: ({ id, completed }: Pick<ITodo, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<TodosProps> = ({
  todos, activeTodos = 0, completeTodos = 0, onRemoveTodo, onToggleCompleteTodo
}) => {
  return (
    <section className='main' data-testid="main">
      <Toggle
        activeTodos={activeTodos}
        completeTodos={completeTodos}
      />
      <ul className='todo-list' data-testid="todo-list">
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
    </section>
  )
}
