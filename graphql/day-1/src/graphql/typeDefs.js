const { gql } = require('apollo-server-express')

module.exports = gql`
    type Book {
        _id: ID!
        title: String!
        author: String!
        releaseYear: Int!
        price: Float!
        stock: Int!
        isManga: Boolean!
        genre: String!
    }

    input BookInput {
        title: String
        author: String
        releaseYear: Int
        price: Float
        stock: Int
        isManga: Boolean
        genre: String
    }

    type Query {
        getBookById(ID: ID!): Book!
        getAllBooks: [Book]
    }

    type Mutation {
        createBook(bookInput: BookInput): Book
        createManyBooks(books: [BookInput]): [Book] 
        deleteBookById(ID: ID!): Boolean
        deleteAllBooks: Boolean
        editBookById(ID: ID!, bookInput: BookInput): Boolean
    }
`