import Todo from '../../modules/todo'

export const todosUpdateResolver = async ({ id, title, description }) => {
  const newTodo: any = await Todo.findByIdAndUpdate(id, { title, description })
  const result = {
    id,
    title: title ?? newTodo.title,
    description: description ?? newTodo.description,
  }
  return result
}
