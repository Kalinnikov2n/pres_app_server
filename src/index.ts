import express = require('express')

import morgan = require('morgan')
import cors = require('cors')
import mainRouter from './routes/main'
import { ApolloServer } from 'apollo-server-express'
import { config } from './config/config'
import { schemas } from './schemas/schemas'
import { resolvers } from './resolvers/resolvers'

const app = express()

const bodyParser = require('body-parser')

app.use(
  cors({
    origin: /* checkOrigin */ '*',
    credentials: true,
  })
)
app.use(morgan('short'))
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.raw({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))

app.use(mainRouter)

const playground: any = true
const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  introspection: true,
  playground,
})

server.applyMiddleware({
  app,
  path: '/graphql',
  cors: {
    origin: /* checkOrigin */ '*',
    credentials: true,
  },
})

app.listen(config.port, () => {
  console.log(`Ready at http://localhost:${config.port}${server.graphqlPath}`)
})

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.stop())
}
export default app
