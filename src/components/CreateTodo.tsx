import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  onSaveTodo: (title: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ onSaveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSaveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form className='input-container' onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        id='todo-input'
        data-testid="text-input"
        value={inputValue}
        onChange={(event) => { setInputValue(event.target.value) }}
        placeholder='¿Qué quieres hacer?'
        autoFocus
      />
    </form>
  )
}
