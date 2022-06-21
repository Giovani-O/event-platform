import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nkicqy07hb01xm4x058id8/master',
  cache: new InMemoryCache()
})