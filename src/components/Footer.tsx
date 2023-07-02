import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeTodos: number
  completeTodos: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompletedTodos: () => void
}

export const Footer: React.FC<Props> = ({
  activeTodos = 0, completeTodos = 0, filterSelected, onClearCompletedTodos, handleFilterChange
}) => {
  return (
    <footer className="footer">
      <span className='todo-count'>
        <strong>{activeTodos}</strong> tareas pendientes
      </span>

      <Filters
        filterSelected={filterSelected}
        filterSelectedChange={handleFilterChange}
      />

      {
        completeTodos > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompletedTodos}
          >
            Borrar completadas
          </button>
        )
      }
    </footer>
  )
}
