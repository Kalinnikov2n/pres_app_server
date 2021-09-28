export const resolvers = {
  Query: {
    todosList: async () => {
      return
    },
    todoGet: async (params) => {
      console.log(params)
      return
    },
  },
  Mutation: {
    todosDeleteMutation: async (params) => {
      console.log(params)
      return
    },
    todosUpdateMutation: async (params) => {
      console.log(params)
      return
    },
    todosCreateMutation: async (params) => {
      console.log(params)
      return
    },
  },
}
