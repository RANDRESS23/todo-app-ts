import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  filterSelectedChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, filterSelectedChange }) => {
  const handleClick = (filter: FilterValue): void => {
    filterSelectedChange(filter)
  }

  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a
                href={href}
                className={className}
                onClick={(event) => {
                  event.preventDefault()
                  handleClick(key)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
