import Todo from '../../modules/todo'

export const todosListResolver = async () => {
  const list = await Todo.find()

  return { list }
}
