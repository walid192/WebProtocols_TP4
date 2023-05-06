import { createSchema } from 'graphql-yoga'
import fs from "fs"
import path from "path"
import { Query } from './queries/query'
import { CV } from './queries/cv'
import { Mutation } from './mutations/mutation'
import { Subscription } from './subscription/subscription'


export const schema = createSchema({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schemas/schema.graphql'),
    'utf8'
  ),
  resolvers: {
    Query,
    CV,
    Mutation,
    Subscription,
  
  },

})