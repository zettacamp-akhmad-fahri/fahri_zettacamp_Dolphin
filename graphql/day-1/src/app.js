const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { applyMiddleware } = require('graphql-middleware')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
// const { authMiddleware } = require('./middlewares')

const app = express()
const executableSchema = makeExecutableSchema({ typeDefs, resolvers })
// const protectedSchema = applyMiddleware(executableSchema, authMiddleware)

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const port = 3000
server.applyMiddleware({ app })

require('./db/mongoose')


app.listen(port, () => {
    console.log(`graphQL running at http://localhost:${port}/graphql`)
})