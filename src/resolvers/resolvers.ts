import { todosCreateResolver } from './todos/todosCreateResolver'
import { todosDeleteResolver } from './todos/todosDeleteResolver'
import { todosGetResolver } from './todos/todosGetResolver'
import { todosListResolver } from './todos/todosListResolver'
import { todosUpdateResolver } from './todos/todosUpdateResolver'

export const resolvers = {
  Query: {
    todosList: async () => {
      const res = await todosListResolver()
      return res
    },
    todoGet: async (_, { params }) => {
      const res = await todosGetResolver(params)
      return res
    },
  },
  Mutation: {
    todosDeleteMutation: async (_, { params }) => {
      const res = await todosDeleteResolver(params)
      return res
    },
    todosUpdateMutation: async (_, { params }) => {
      const res = await todosUpdateResolver(params)
      return res
    },
    todosCreateMutation: async (_, { params }) => {
      const res = await todosCreateResolver(params)
      return res
    },
  },
}
