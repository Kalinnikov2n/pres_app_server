import Todo from '../../modules/todo'

export const todosDeleteResolver = async ({ id }) => {
  const todo = await Todo.findById(id)
  await Todo.findOneAndDelete({ _id: id })
  return todo
}
