import Todo from '../../modules/todo'

export const todosCreateResolver = async ({ title, description }) => {
  const data = {
    title: title ?? 'TITLE OF TODO',
    description: description ?? 'DESCRIPTION OF TODO',
  }
  const newTodo = await Todo.create(data)
  await newTodo.save()
  return newTodo
}
