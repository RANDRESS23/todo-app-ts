import { type TodoId, type ITodo } from '../types'

interface TodoProps extends ITodo {
  onToggleCompleteTodo: ({ id, completed }: Pick<ITodo, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<TodoProps> = ({ id, title, completed, onToggleCompleteTodo, onRemoveTodo }) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={(event) => {
          onToggleCompleteTodo({
            id,
            completed: event.target.checked
          })
        }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => { onRemoveTodo({ id }) }}
      >

      </button>
    </div>
  )
}
