const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    scalar Date

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
        _id: ID!
    }

    type tokenAuth {
        isAuth: Boolean!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        checkLogin: tokenAuth!
    }
    
    type RootMutation {
        createUser: AuthData
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
     }

`);   