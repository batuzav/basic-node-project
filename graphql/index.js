const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");

const graphqlSchema = require("./schema/index");
const grapgqlResolvers = require("./resolvers/index");


app.use(
    '/api',
    graphqlHTTP({
      schema: graphqlSchema,
      rootValue: grapgqlResolvers,
      graphiql: true,
    }),
  );

module.exports = app;