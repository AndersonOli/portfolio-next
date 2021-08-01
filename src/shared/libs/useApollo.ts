import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

// @todo - add cache, state, cdn & custom server
const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GRAPHQL_HOST,
    headers: {
      'x-hasura-admin-secret': process.env.GRAPHQL_HASURA_TOKEN,
    },
    fetch: fetch,
  }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
})

export default client
