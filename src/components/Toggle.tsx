interface Props {
  activeTodos: number
  completeTodos: number
}

export const Toggle: React.FC<Props> = ({
  activeTodos = 0, completeTodos = 0
}) => {
  if (activeTodos === 0 && completeTodos === 0) return null

  return (
    <div className="toggle-all-container">
      <input type="checkbox" className="toggle-all" data-testid="toggle-all" />
      <label className="toggle-all-label" htmlFor="toggle-all">
        Toggle All Input
      </label>
    </div>
  )
}
