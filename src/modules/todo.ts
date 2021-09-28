import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/todos', {})

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
})

export default mongoose.model('todo', todoSchema)
