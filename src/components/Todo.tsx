import { type ITodo } from '../types'

interface TodoProps extends ITodo {
  onRemoveTodo: (id: number) => void
}

export const Todo: React.FC<TodoProps> = ({ id, title, completed, onRemoveTodo }) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {}}
      >

      </button>
    </div>
  )
}
