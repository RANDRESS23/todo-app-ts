import { type TODO_FILTERS } from './constants'

export interface ITodo {
  id: `${string}-${string}-${string}-${string}-${string}`
  title: string
  completed: boolean
}

export type TodoId = Pick<ITodo, 'id'>
export type TodoTitle = Pick<ITodo, 'title'>
export type TodoCompleted = Pick<ITodo, 'completed'>

export type ListOfTodos = ITodo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
