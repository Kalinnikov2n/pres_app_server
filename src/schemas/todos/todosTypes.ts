import { gql } from 'apollo-server-core'

export const todosTypes = gql`
  type TodoItem {
    id: String
    title: String
    desciption: String
  }

  type TodosListResult {
    list: [TodoItem]
  }

  input TodoGetParams {
    id: String
  }

  input TodoDeleteParams {
    id: String
  }

  input TodoCreateParams {
    title: String
    desciption: String
  }

  input TodoUpdateParams {
    id: String
    title: String
    desciption: String
  }
`
