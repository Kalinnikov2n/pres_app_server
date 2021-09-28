import Todo from '../../modules/todo'

export const todosGetResolver = async ({ id }) => {
  const todo = await Todo.findById({ _id: id })
  return todo
}
