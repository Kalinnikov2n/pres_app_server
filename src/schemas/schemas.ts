import { gql } from 'apollo-server-express'
import { todosTypes } from './todos/todosTypes'

const queryDefs = gql`
  type Query {
    todosList: TodosListResult
    todoGet(params: TodoGetParams): TodoItem
  }
  type Mutation {
    todosDeleteMutation(params: TodoDeleteParams): TodoItem
    todosUpdateMutation(params: TodoUpdateParams): TodoItem
    todosCreateMutation(params: TodoCreateParams): TodoItem
  }
`

export const schemas = [queryDefs, todosTypes]
